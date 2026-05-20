/** Fiktiv kunddata för demo */
window.CUSTOMER_DATA = {
  "K-10042": {
    name: "Nordic Solutions AB",
    orgNr: "556123-4567",
    contact: "Anna Lindqvist",
    services: [
      { name: "Managed IT", since: "2022-03-01", tier: "Premium" },
      { name: "Molnsäkerhetskopiering", since: "2022-06-15", tier: "Standard" },
      { name: "Microsoft 365", since: "2021-11-01", tier: "Enterprise" },
      { name: "Nätverksövervakning 24/7", since: "2023-01-10", tier: "Premium" },
      { name: "Endpoint-säkerhet", since: "2022-09-01", tier: "Standard" }
    ],
    tickets: [
      { id: "TKT-24001", date: "2025-01-08", subject: "VPN-anslutning fungerar inte", status: "löst" },
      { id: "TKT-24015", date: "2025-01-22", subject: "Skrivare offline i Stockholm", status: "löst" },
      { id: "TKT-24089", date: "2025-02-14", subject: "Outlook synkar inte", status: "löst" },
      { id: "TKT-24102", date: "2025-02-28", subject: "Ny användare i Azure AD", status: "löst" },
      { id: "TKT-24156", date: "2025-03-05", subject: "Långsam dator – diskutrymme", status: "löst" },
      { id: "TKT-24178", date: "2025-03-18", subject: "Teams-möte kraschar", status: "löst" },
      { id: "TKT-24201", date: "2025-04-02", subject: "SharePoint-behörigheter", status: "öppen" },
      { id: "TKT-24234", date: "2025-04-15", subject: "Uppdatering Windows 11", status: "pågår" }
    ],
    devices: [
      { id: "DEV-001", name: "NB-CEO-01", type: "Laptop", model: "Dell Latitude 5540", user: "Anna Lindqvist", os: "Windows 11", lastSeen: "2025-05-19 14:32", status: "online" },
      { id: "DEV-002", name: "NB-SAL-12", type: "Laptop", model: "Lenovo ThinkPad T14", user: "Erik Johansson", os: "Windows 11", lastSeen: "2025-05-19 11:05", status: "online" },
      { id: "DEV-003", name: "WS-EKONOMI-03", type: "Stationär", model: "HP EliteDesk 800 G9", user: "Maria Berg", os: "Windows 11", lastSeen: "2025-05-18 16:45", status: "offline" },
      { id: "DEV-004", name: "SRV-FIL-01", type: "Server", model: "Dell PowerEdge R450", user: "—", os: "Windows Server 2022", lastSeen: "2025-05-19 14:50", status: "online" },
      { id: "DEV-005", name: "NB-IT-07", type: "Laptop", model: "Dell Latitude 5440", user: "Jonas Ek", os: "Windows 11", lastSeen: "2025-05-17 09:20", status: "varning", note: "Antivirus ej uppdaterat" }
    ],
    licenses: [
      { product: "Microsoft 365 E3", sku: "SPE_E3", quantity: 45, assigned: 42, expires: "2026-06-30", status: "aktiv" },
      { product: "Microsoft 365 E5 Security", sku: "SPE_E5_SEC", quantity: 10, assigned: 8, expires: "2026-06-30", status: "aktiv" },
      { product: "Azure AD Premium P1", sku: "AAD_P1", quantity: 45, assigned: 45, expires: "2026-06-30", status: "aktiv" },
      { product: "Power BI Pro", sku: "POWER_BI_PRO", quantity: 8, assigned: 6, expires: "2025-12-31", status: "aktiv" },
      { product: "Visio Plan 2", sku: "VISIO_P2", quantity: 3, assigned: 2, expires: "2025-08-15", status: "utgår snart" }
    ]
  },
  "K-20018": {
    name: "Bergström & Co HB",
    orgNr: "969512-3456",
    contact: "Lars Bergström",
    services: [
      { name: "Managed IT", since: "2023-08-01", tier: "Standard" },
      { name: "Microsoft 365", since: "2023-08-01", tier: "Business" },
      { name: "Helpdesk (8–17)", since: "2023-08-01", tier: "Standard" }
    ],
    tickets: [
      { id: "TKT-23890", date: "2025-01-12", subject: "Lösenordsåterställning", status: "löst" },
      { id: "TKT-23901", date: "2025-02-03", subject: "Skrivare delad mapp", status: "löst" },
      { id: "TKT-23945", date: "2025-02-20", subject: "E-post på mobil", status: "löst" },
      { id: "TKT-24002", date: "2025-03-11", subject: "OneDrive synk", status: "löst" }
    ],
    devices: [
      { id: "DEV-101", name: "NB-LARS", type: "Laptop", model: "HP ProBook 450 G10", user: "Lars Bergström", os: "Windows 11", lastSeen: "2025-05-19 08:15", status: "online" },
      { id: "DEV-102", name: "NB-EMMA", type: "Laptop", model: "HP ProBook 450 G10", user: "Emma Bergström", os: "Windows 11", lastSeen: "2025-05-19 13:40", status: "online" },
      { id: "DEV-103", name: "NB-KONTOR-02", type: "Laptop", model: "Acer Aspire 5", user: "Kontor", os: "Windows 10", lastSeen: "2025-05-10 17:00", status: "offline" }
    ],
    licenses: [
      { product: "Microsoft 365 Business Premium", sku: "O365_BUSINESS_PREMIUM", quantity: 6, assigned: 5, expires: "2026-02-28", status: "aktiv" },
      { product: "Microsoft Defender for Business", sku: "DEFENDER_BUS", quantity: 6, assigned: 5, expires: "2026-02-28", status: "aktiv" }
    ]
  },
  "K-30055": {
    name: "TechVenture Scandinavia",
    orgNr: "559876-1234",
    contact: "Sofia Nilsson",
    services: [
      { name: "Managed IT", since: "2020-01-15", tier: "Enterprise" },
      { name: "Microsoft 365", since: "2020-01-15", tier: "Enterprise" },
      { name: "Azure Hosting", since: "2021-05-01", tier: "Premium" },
      { name: "SOC / SIEM", since: "2024-01-01", tier: "Premium" },
      { name: "Penetrationstest (årligt)", since: "2024-06-01", tier: "Add-on" }
    ],
    tickets: [
      { id: "TKT-23500", date: "2025-01-05", subject: "Incident: misstänkt phishing", status: "löst" },
      { id: "TKT-23512", date: "2025-01-18", subject: "Azure VM skalning", status: "löst" },
      { id: "TKT-23580", date: "2025-02-01", subject: "Intune policy-uppdatering", status: "löst" },
      { id: "TKT-23620", date: "2025-02-15", subject: "SQL-databas prestanda", status: "löst" },
      { id: "TKT-23655", date: "2025-03-01", subject: "Conditional Access-fel", status: "löst" },
      { id: "TKT-23700", date: "2025-03-12", subject: "Backup-verifiering Q1", status: "löst" },
      { id: "TKT-23740", date: "2025-03-25", subject: "DevOps pipeline", status: "löst" },
      { id: "TKT-23780", date: "2025-04-08", subject: "SSL-certifikat förnyelse", status: "löst" },
      { id: "TKT-23810", date: "2025-04-22", subject: "Entra ID gruppstruktur", status: "pågår" },
      { id: "TKT-23850", date: "2025-05-05", subject: "Log Analytics alert", status: "öppen" }
    ],
    devices: [
      { id: "DEV-201", name: "NB-DEV-01", type: "Laptop", model: "MacBook Pro 14\"", user: "Sofia Nilsson", os: "macOS 14", lastSeen: "2025-05-19 15:00", status: "online" },
      { id: "DEV-202", name: "NB-DEV-02", type: "Laptop", model: "MacBook Pro 14\"", user: "Oscar Lind", os: "macOS 14", lastSeen: "2025-05-19 14:55", status: "online" },
      { id: "DEV-203", name: "WS-QA-01", type: "Stationär", model: "Custom build", user: "QA-team", os: "Windows 11", lastSeen: "2025-05-19 12:00", status: "online" },
      { id: "DEV-204", name: "AZ-VM-APP-01", type: "Server", model: "Azure D4s v5", user: "—", os: "Ubuntu 22.04", lastSeen: "2025-05-19 14:59", status: "online" },
      { id: "DEV-205", name: "AZ-VM-DB-01", type: "Server", model: "Azure E8s v5", user: "—", os: "Windows Server 2022", lastSeen: "2025-05-19 14:59", status: "online" },
      { id: "DEV-206", name: "NB-SALES-05", type: "Laptop", model: "Dell XPS 15", user: "Lisa Hansson", os: "Windows 11", lastSeen: "2025-05-14 10:30", status: "varning", note: "BitLocker ej aktiverat" }
    ],
    licenses: [
      { product: "Microsoft 365 E5", sku: "SPE_E5", quantity: 120, assigned: 118, expires: "2027-01-31", status: "aktiv" },
      { product: "Azure AD Premium P2", sku: "AAD_P2", quantity: 120, assigned: 118, expires: "2027-01-31", status: "aktiv" },
      { product: "Microsoft Intune Suite", sku: "INTUNE_SUITE", quantity: 120, assigned: 115, expires: "2027-01-31", status: "aktiv" },
      { product: "Power Platform (per user)", sku: "POWER_PLATFORM", quantity: 25, assigned: 20, expires: "2027-01-31", status: "aktiv" },
      { product: "Project Plan 3", sku: "PROJECT_P3", quantity: 15, assigned: 12, expires: "2026-09-30", status: "aktiv" },
      { product: "Visio Plan 2", sku: "VISIO_P2", quantity: 10, assigned: 10, expires: "2025-06-01", status: "utgår snart" }
    ]
  }
};
