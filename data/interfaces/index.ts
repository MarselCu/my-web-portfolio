import { ReactNode } from "react";

export type NavLink = {
    link: string;
    label: string;
}

export type Social = {
    icon: ReactNode;
    url: string;
}

export type CareerStat = {
    num: number;
    label: string;
}

export type Service = {
    num: string;
    title: string;
    description: string;
    url: string;
}

export interface SectionData<t> {
    title: string;
    description: string;
    items: t[];
}

export type AboutItem = {
    label: string;
    value: string;
}

export type ExperienceItem = {
    company: string;
    position: string;
    duration: string;
}

export type EducationItem = {
    institution: string;
    program: string;
    duration: string;
}

export type SkillItem = {
    icon: ReactNode;
    name: string;
}