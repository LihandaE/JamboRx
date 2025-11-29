
let medicines = JSON.parse(localStorage.getItem("jambo_medicines")) || [

    
    {
        id: "OND001",
        name: "Ondansetron",
        category: "Antiemetics",
        mfg: "2024-01-12",
        exp: "2026-01-12",
        qty: 120,
        available: true,
    },
    {
        id: "CHP002",
        name: "Chlorpromazine",
        category: "Antiemetics",
        mfg: "2023-12-09",
        exp: "2025-12-09",
        qty: 80,
        available: true,
    },
    {
        id: "PROM003",
        name: "Promethazine",
        category: "Antiemetics",
        mfg: "2024-02-04",
        exp: "2026-02-04",
        qty: 140,
        available: true,
    },
    {
        id: "SCO004",
        name: "Scopolamine",
        category: "Antiemetics",
        mfg: "2024-01-30",
        exp: "2026-01-30",
        qty: 100,
        available: true,
    },

    
    {
        id: "MET101",
        name: "Metformin",
        category: "Antidiabetics",
        mfg: "2024-01-18",
        exp: "2026-01-18",
        qty: 300,
        available: true,
       
    },
    {
        id: "SIT102",
        name: "Sitagliptin",
        category: "Antidiabetics",
        mfg: "2024-02-01",
        exp: "2026-02-01",
        qty: 90,
        available: true,
       
    },
    {
        id: "DAP103",
        name: "Dapagliflozin",
        category: "Antidiabetics",
        mfg: "2023-12-22",
        exp: "2025-12-22",
        qty: 70,
        available: true,
      
    },
    {
        id: "SEM104",
        name: "Semaglutide",
        category: "Antidiabetics",
        mfg: "2024-03-10",
        exp: "2026-03-10",
        qty: 55,
        available: true,
       
    },
    {
        id: "INS105",
        name: "Insulin",
        category: "Antidiabetics",
        mfg: "2024-01-10",
        exp: "2025-12-10",
        qty: 200,
        available: true,
       
    },

    
    {
        id: "QUI201",
        name: "Quinine",
        category: "Antimalarials",
        mfg: "2023-11-28",
        exp: "2025-11-28",
        qty: 110,
        available: true,
        
    },
    {
        id: "ATV202",
        name: "Atovaquone-Proguanil",
        category: "Antimalarials",
        mfg: "2024-01-09",
        exp: "2026-01-09",
        qty: 75,
        available: true,
      
    },
    {
        id: "ART203",
        name: "Artemether-Lumefantrine",
        category: "Antimalarials",
        mfg: "2024-03-03",
        exp: "2026-03-03",
        qty: 160,
        available: true,
        
    },

    
    {
        id: "ACE301",
        name: "Acetaminophen",
        category: "Analgesics",
        mfg: "2024-01-08",
        exp: "2026-01-08",
        qty: 310,
        available: true,
        
    },
    {
        id: "IBU302",
        name: "Ibuprofen",
        category: "Analgesics",
        mfg: "2024-02-15",
        exp: "2026-02-15",
        qty: 260,
        available: true,
        
    },
    {
        id: "ASP303",
        name: "Aspirin",
        category: "Analgesics",
        mfg: "2023-12-20",
        exp: "2025-12-20",
        qty: 210,
        available: true,
       
    },
   
    {
        id: "COD305",
        name: "Codeine",
        category: "Analgesics",
        mfg: "2023-11-11",
        exp: "2025-11-11",
        qty: 60,
        available: true,
        
    },
    {
        id: "MOR306",
        name: "Morphine",
        category: "Analgesics",
        mfg: "2024-02-05",
        exp: "2026-02-05",
        qty: 40,
        available: true,
        
    },

  
    {
        id: "AMO401",
        name: "Amoxicillin",
        category: "Antibiotics",
        mfg: "2024-02-08",
        exp: "2026-02-08",
        qty: 180,
        available: true,
        
    },
    {
        id: "AZI402",
        name: "Azithromycin",
        category: "Antibiotics",
        mfg: "2024-01-19",
        exp: "2026-01-19",
        qty: 150,
        available: true,
       
    },
    {
        id: "CEP403",
        name: "Cephalexin",
        category: "Antibiotics",
        mfg: "2023-12-01",
        exp: "2025-12-01",
        qty: 130,
        available: true,
       
    },
    {
        id: "DOX404",
        name: "Doxycycline",
        category: "Antibiotics",
        mfg: "2024-03-01",
        exp: "2026-03-01",
        qty: 200,
        available: true,
        
    },
    {
        id: "CIP405",
        name: "Ciprofloxacin",
        category: "Antibiotics",
        mfg: "2024-02-14",
        exp: "2026-02-14",
        qty: 170,
        available: true,
        
    },

   
    {
        id: "FUR501",
        name: "Furosemide",
        category: "Antihypertensives",
        mfg: "2024-01-11",
        exp: "2026-01-11",
        qty: 220,
        available: true,
        
    },
    {
        id: "HCT502",
        name: "HCTZ",
        category: "Antihypertensives",
        mfg: "2024-02-21",
        exp: "2026-02-21",
        qty: 195,
        available: true,
       
    },
    {
        id: "IND503",
        name: "Indapamide",
        category: "Antihypertensives",
        mfg: "2023-11-17",
        exp: "2025-11-17",
        qty: 100,
        available: true,
       
    },
    {
        id: "ENA504",
        name: "Enalapril",
        category: "Antihypertensives",
        mfg: "2024-01-02",
        exp: "2026-01-02",
        qty: 160,
        available: true,
       
    },
    

    {
        id: "CET601",
        name: "Cetirizine",
        category: "Antihistamines",
        mfg: "2023-12-06",
        exp: "2025-12-06",
        qty: 260,
        available: true,
        
    },
    {
        id: "LOR602",
        name: "Loratadine",
        category: "Antihistamines",
        mfg: "2024-02-10",
        exp: "2026-02-10",
        qty: 230,
        available: true,
        
    },
    {
        id: "CHL603",
        name: "Chlorpheniramine",
        category: "Antihistamines",
        mfg: "2024-01-04",
        exp: "2026-01-04",
        qty: 125,
        available: true,
        
    },
    {
        id: "LEV604",
        name: "Levocetirizine",
        category: "Antihistamines",
        mfg: "2024-03-15",
        exp: "2026-03-15",
        qty: 190,
        available: true,
       
    }
];

localStorage.setItem("jambo_medicines", JSON.stringify(medicines));

