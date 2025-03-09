import { ReactNode } from "react";

export interface NavLink {
    link: string;
    label: string;
}

export interface Social {
    icon: ReactNode;
    url: string;
}

export interface CareerStat {
    num: number;
    label: string;
}

export interface Service {
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

export interface AboutItem {
    label: string;
    value: string;
}

export interface ExperienceItem {
    company: string;
    position: string;
    duration: string;
}

export interface EducationItem{
    institution: string;
    program: string;
    duration: string;
}

export interface SkillItem {
    icon: ReactNode;
    name: string;
}