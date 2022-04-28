import { prisma } from "../../database.js";

export async function getByDiscipline() {
  return prisma.term.findMany({
    select: {
      number: true,
      disciplines: {
        select: {
          name: true,
          teacherDisciplines: {
            select: {
              tests: {
                select: {
                  name: true,
                  pdfUrl: true,
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
              teacher: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });
}
export async function getByDisciplineName(disciplineName: string) {
  return prisma.discipline.findMany({
    where: {
      name: { startsWith: disciplineName },
    },
    select: {
      name: true,
      teacherDisciplines: {
        select: {
          tests: {
            select: {
              name: true,
              pdfUrl: true,
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
          teacher: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
}

export async function getByTeacher() {
  return prisma.teacher.findMany({
    select: {
      name: true,
      teacherDisciplines: {
        select: {
          tests: {
            select: {
              name: true,
              pdfUrl: true,
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
          discipline: {
            select: {
              name: true,
              term: {
                select: {
                  number: true,
                },
              },
            },
          },
        },
      },
    },
  });
}
export async function getByTeacherName(teacherName : string) {
  return prisma.teacher.findMany({
      where : {
          name : {
              startsWith : teacherName
          }
      },
    select: {
      name: true,
      teacherDisciplines: {
        select: {
          tests: {
            select: {
              name: true,
              pdfUrl: true,
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
          discipline: {
            select: {
              name: true,
              term: {
                select: {
                  number: true,
                },
              },
            },
          },
        },
      },
    },
  });
}
