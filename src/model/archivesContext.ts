import { Postable } from "./post";

export interface ArchiveContext {
    classify: string | string[] | undefined
    group: string | string[] | undefined

    archives: Postable[]
    pagenationURLs: string[];
}