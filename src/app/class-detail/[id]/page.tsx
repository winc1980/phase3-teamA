import ClassDetail from "./class-detail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ClassDetail params={params} />;
}
