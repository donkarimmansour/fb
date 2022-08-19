import GroupPost from '../models/groupPost';
export declare function generateFacebookGroupURLById(id: number): string;
export declare function getOldPublications(fileName: string): GroupPost[];
export declare function sleep(duration: number): Promise<void>;
export declare function autoScroll(): void;
