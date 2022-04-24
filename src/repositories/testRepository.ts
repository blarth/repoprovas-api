import { prisma } from "../../database.js";



export async function getByDiscipline(){
    return prisma.term.findMany({
        select : {
            number : true,
            disciplines : {
                select : {
                    name : true,
                    teacherDisciplines : {
                        select : {
                            tests : {
                                select : {
                                    name : true,
                                    category : {
                                        select : {
                                            name : true
                                        }
                                    }
                                }
                            },
                            teacher : {
                                select : {
                                    name : true
                                }
                            }
                        }
                    }
                }
            }

        }
    })
}

export async function getByTeacher(){
    return prisma.teacher.findMany({
        select : {
            name : true,
            teacherDisciplines : {
                select : {
                    tests : {
                        select : {
                            name : true,
                            category : {
                                select : {
                                    name : true
                                }
                            }
                        }
                    }
                    ,discipline : {
                        select : {
                            name : true,
                            term : {
                                select : {
                                    number : true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}