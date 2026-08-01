export type DocumentCategory =
  | "التأسيس والترخيص"
  | "اللائحة الأساسية"
  | "مجلس الإدارة"
  | "القرارات الإدارية";

export interface GovernanceDocument {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  fileUrl: string;
  fileSizeKb: number;
  updatedAt: string;
}
