const $ = (sel, root = document) => root.querySelector(sel);

const tierClass = {
  Premium: "badge-premium",
  Enterprise: "badge-enterprise",
  Standard: "badge-standard",
  Business: "badge-business",
  "Add-on": "badge-addon"
};

function parseDate(str) {
  return new Date(str + "T00:00:00");
}

function inRange(dateStr, from, to) {
  const d = parseDate(dateStr);
  return d >= from && d <= to;
}

function formatDate(str) {
  return new Date(str + "T00:00:00").toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function showError(msg) {
  $("#dashboard").hidden = true;
  const el = $("#message");
  el.hidden = false;
  el.className = "error-msg";
  el.textContent = msg;
}

function showEmpty() {
  $("#dashboard").hidden = true;
  const el = $("#message");
  el.hidden = false;
  el.className = "empty-state";
  el.textContent = "Ange kundnummer och period, sedan klicka på Sök.";
}

function renderDashboard(customerId, customer, from, to, fromStr, toStr) {
  const ticketsInPeriod = customer.tickets.filter((t) =>
    inRange(t.date, from, to)
  );

  $("#message").hidden = true;
  $("#dashboard").hidden = false;

  $("#customerName").textContent = customer.name;
  $("#customerMeta").textContent = `${customerId} · Org.nr ${customer.orgNr} · Kontakt: ${customer.contact}`;

  $("#statServices").textContent = customer.services.length;
  $("#statTickets").textContent = ticketsInPeriod.length;
  $("#statDevices").textContent = customer.devices.length;
  $("#statLicenses").textContent = customer.licenses.length;
  $("#periodLabel").textContent = `${formatDate(fromStr)} – ${formatDate(toStr)}`;

  const servicesList = $("#servicesList");
  servicesList.innerHTML = customer.services
    .map(
      (s) => `
    <li>
      <div>
        <div class="service-name">${s.name}</div>
        <div class="service-meta">Sedan ${formatDate(s.since)}</div>
      </div>
      <span class="badge ${tierClass[s.tier] || "badge-standard"}">${s.tier}</span>
    </li>`
    )
    .join("");

  const ticketsBody = $("#ticketsBody");
  if (ticketsInPeriod.length === 0) {
    ticketsBody.innerHTML = `<tr><td colspan="4" style="color: var(--text-muted);">Inga tickets i vald period.</td></tr>`;
  } else {
    ticketsBody.innerHTML = ticketsInPeriod
      .map(
        (t) => `
      <tr>
        <td>${t.id}</td>
        <td>${formatDate(t.date)}</td>
        <td>${t.subject}</td>
        <td><span class="ticket-status ticket-${t.status.replace(" ", "")}">${t.status}</span></td>
      </tr>`
      )
      .join("");
  }

  const devicesBody = $("#devicesBody");
  devicesBody.innerHTML = customer.devices
    .map(
      (d) => `
    <tr>
      <td><strong>${d.name}</strong><br><span style="color: var(--text-muted); font-size: 0.8rem;">${d.id}</span></td>
      <td>${d.type}</td>
      <td>${d.model}</td>
      <td>${d.user}</td>
      <td>${d.os}</td>
      <td><span class="status-dot status-${d.status}">${d.status}</span>${d.note ? `<br><span class="note">${d.note}</span>` : ""}</td>
      <td style="color: var(--text-muted); font-size: 0.85rem;">${d.lastSeen}</td>
    </tr>`
    )
    .join("");

  const licensesBody = $("#licensesBody");
  licensesBody.innerHTML = customer.licenses
    .map(
      (l) => `
    <tr>
      <td><strong>${l.product}</strong><br><span style="color: var(--text-muted); font-size: 0.8rem;">${l.sku}</span></td>
      <td>${l.quantity}</td>
      <td>${l.assigned}</td>
      <td>${formatDate(l.expires)}</td>
      <td class="status-${l.status.replace(" ", "-")}">${l.status}</td>
    </tr>`
    )
    .join("");
}

function search() {
  const id = $("#customerId").value.trim().toUpperCase();
  const fromVal = $("#dateFrom").value;
  const toVal = $("#dateTo").value;

  if (!id) {
    showError("Ange ett kundnummer.");
    return;
  }
  if (!fromVal || !toVal) {
    showError("Välj start- och slutdatum för perioden.");
    return;
  }

  const from = parseDate(fromVal);
  const to = parseDate(toVal);
  if (from > to) {
    showError("Startdatum måste vara före eller samma som slutdatum.");
    return;
  }

  const customer = window.CUSTOMER_DATA[id];
  if (!customer) {
    showError(`Kundnummer "${id}" hittades inte. Prova K-10042, K-20018 eller K-30055.`);
    return;
  }

  renderDashboard(id, customer, from, to, fromVal, toVal);
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      $(`#panel-${tab.dataset.tab}`).classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  $("#dateFrom").value = "2025-01-01";
  $("#dateTo").value = "2025-03-31";
  $("#searchBtn").addEventListener("click", search);
  $("#customerId").addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });
  initTabs();
  showEmpty();
});
