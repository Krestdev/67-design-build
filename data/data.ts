import { Project, serviceProps } from "@/types/types";

export const servicesData:serviceProps[] = [
        {
            title: "service_geo_title",
            description: "service_geo_desc",
            src: "technician.webp",
            id: "geotech"
        },
        {
            title: "service_cal_title",
            description: "service_cal_desc",
            src: "report.webp",
            id: "calcul"
        },
        {
            title: "service_cost_title",
            description: "service_cost_desc",
            src: "brainstorm.webp",
            id: "estimation"
        },
        {
            title: "service_work_title",
            description: "service_work_desc",
            src: "building.webp",
            id: "work"
        },
        {
            title: "service_study_title",
            description: "service_study_desc",
            src: "loft.webp",
            id: "study"
        },
        {
            title: "service_maintenance_title",
            description: "service_maintenance_desc",
            src: "construction_site.webp",
            id: "maintenance"
        },
    ];


export const works:Array<Project> = [
    {
        slug: "saga-africa",
        title: "Projects.saga_title",
        description: "Projects.saga_desc",
        images: [{src:"/images/saga_room.webp", alt:"saga-africa"},{src:"/images/saga_home.webp", alt:"saga interior"},{src:"/images/saga_exterior.webp", alt:"saga external"}],
        tags: ["Projects.tag_1", "Projects.tag_0", "Projects.tag_2"],
        team: [],
        date: new Date ("2025-06-01")
    },
    {
        slug: "le-carino",
        title: "Projects.carino_title",
        description: "Projects.carino_desc",
        images: [{src:"/images/carino_3d_2.webp", alt:"3d le carino"},{src:"/images/carino_3d_1.webp", alt:"le carino"},{src:"/images/carino_3d.webp", alt:"3d du carino"}],
        tags: ["Projects.tag_1", "Projects.tag_0", "Projects.tag_2"],
        team: [],
        date: new Date ("2025-04-01")
    },
];