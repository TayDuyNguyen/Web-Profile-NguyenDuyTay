export interface ProjectMeta {
    labelKey: string;
    valueKey: string;
}

export interface Project {
    id: string;
    category: string;
    images: string[];
    titleKey: string;
    descriptionKey: string;
    problemTitleKey: string;
    problemDescKey: string;
    solutionTitleKey: string;
    solutionDescKey: string;
    metadata: ProjectMeta[];
}

export const projectsData: Project[] = [
    {
        id: "danang-explorer",
        category: "E-Travel",
        images: [
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772692803/screen_kn8zxe.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772692757/screen_gru2z5.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772692706/screen_husbwe.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772692697/screen_kxtfhp.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772692651/screen_honeai.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772692643/screen_gs1e1e.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772686313/screen_u3nsmj.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772686275/screen_q5jxup.png",
        ],
        titleKey: "home.projects.items.0.title",
        descriptionKey: "home.projects.items.0.description",
        problemTitleKey: "projectsDetail.danang.problemTitle",
        problemDescKey: "projectsDetail.danang.problemDesc",
        solutionTitleKey: "projectsDetail.danang.solutionTitle",
        solutionDescKey: "projectsDetail.danang.solutionDesc",
        metadata: [
            { labelKey: "projects.detail.meta.role", valueKey: "projectsDetail.danang.meta.role" },
            { labelKey: "projects.detail.meta.duration", valueKey: "projectsDetail.danang.meta.duration" },
            { labelKey: "projects.detail.meta.tools", valueKey: "projectsDetail.danang.meta.tools" },
            { labelKey: "projects.detail.meta.field", valueKey: "projectsDetail.danang.meta.field" },
        ],
    },
    {
        id: "eduflow",
        category: "E-learning",
        images: [
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772693397/screen_s5fwrg.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772693358/screen_fjmgwi.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772693349/screen_jxhipc.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772693317/screen_u8m3o3.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772693308/screen_tcs2hn.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772693283/screen_dkpjmn.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772693208/screen_r3up1z.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772692888/screen_xe07xo.png",
        ],
        titleKey: "home.projects.items.1.title",
        descriptionKey: "home.projects.items.1.description",
        problemTitleKey: "projectsDetail.eduflow.problemTitle",
        problemDescKey: "projectsDetail.eduflow.problemDesc",
        solutionTitleKey: "projectsDetail.eduflow.solutionTitle",
        solutionDescKey: "projectsDetail.eduflow.solutionDesc",
        metadata: [
            { labelKey: "projects.detail.meta.role", valueKey: "projectsDetail.eduflow.meta.role" },
            { labelKey: "projects.detail.meta.duration", valueKey: "projectsDetail.eduflow.meta.duration" },
            { labelKey: "projects.detail.meta.tools", valueKey: "projectsDetail.eduflow.meta.tools" },
            { labelKey: "projects.detail.meta.field", valueKey: "projectsDetail.eduflow.meta.field" },
        ],
    },
    {
        id: "sellio",
        category: "E-shopping",
        images: [
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594791/screen_db8wvs.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594749/screen_hoyc5d.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594655/screen_dpr6mv.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594725/screen_gl6m8l.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594605/screen_c1usrp.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594632/screen_hk3p9h.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594554/screen_dos7sd.png",
            "https://res.cloudinary.com/dyragzjcd/image/upload/v1772594471/screen_dlp2ug.png",
        ],
        titleKey: "home.projects.items.2.title",
        descriptionKey: "home.projects.items.2.description",
        problemTitleKey: "projectsDetail.sellio.problemTitle",
        problemDescKey: "projectsDetail.sellio.problemDesc",
        solutionTitleKey: "projectsDetail.sellio.solutionTitle",
        solutionDescKey: "projectsDetail.sellio.solutionDesc",
        metadata: [
            { labelKey: "projects.detail.meta.role", valueKey: "projectsDetail.sellio.meta.role" },
            { labelKey: "projects.detail.meta.duration", valueKey: "projectsDetail.sellio.meta.duration" },
            { labelKey: "projects.detail.meta.tools", valueKey: "projectsDetail.sellio.meta.tools" },
            { labelKey: "projects.detail.meta.field", valueKey: "projectsDetail.sellio.meta.field" },
        ],
    },
];
