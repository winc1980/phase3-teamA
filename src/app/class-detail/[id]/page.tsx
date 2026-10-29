import ClassDetail from "./class-detail";

export const instant = false;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ClassDetail params={params} />;
}
