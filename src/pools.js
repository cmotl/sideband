export const POOLS = [
  {
    id: 'technician_2022-2026',
    label: 'Technician',
    years: '2022–2026',
    file: `${import.meta.env.BASE_URL}data/technician_2022-2026.json`,
    examQuestions: 35,
    passingScore: 26,
    book: {
      title: 'ARRL Ham Radio License Manual, 5th Edition',
      url: 'http://www.arrl.org/ham-radio-license-manual',
    },
  },
  {
    id: 'technician_2026-2030',
    label: 'Technician',
    years: '2026–2030',
    file: `${import.meta.env.BASE_URL}data/technician_2026-2030.json`,
    examQuestions: 35,
    passingScore: 26,
    book: null,
  },
  {
    id: 'general_2023-2027',
    label: 'General',
    years: '2023–2027',
    file: `${import.meta.env.BASE_URL}data/general_2023-2027.json`,
    examQuestions: 35,
    passingScore: 26,
    book: {
      title: 'ARRL General Class License Manual, 10th Edition',
      url: 'http://www.arrl.org/general-class-license-manual',
    },
  },
  {
    id: 'extra_2024-2028',
    label: 'Extra',
    years: '2024–2028',
    file: `${import.meta.env.BASE_URL}data/extra_2024-2028.json`,
    examQuestions: 50,
    passingScore: 37,
    book: {
      title: 'ARRL Extra Class License Manual, 13th Edition',
      url: 'http://www.arrl.org/extra-class-license-manual',
    },
  },
]
