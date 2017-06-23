export class Resume {
    name: string;
    designation: string;
    profileUrl: string;
    contact: {
        phone: number;
        email: string;
        facebook: string;
        twitter: string;
        googleplus: string;
        github: string;
    };
    title: string;
    highlights: Highlight[];
    education: Education[];
}

export class Highlight {
    name: string;
    src: string;
    description: string;
    createdBy: string;
    link: string;
    actionButton: string;
}

export class Education {
    qualification: string;
    department: string;
    institution: string;
    year: string;
    percentage: number;
    board: string;
}