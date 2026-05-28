import CourseList from "@/components/course-list";
import Features from "@/components/features";

export default function CoursePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-10 text-center text-4xl font-bold">
        รายการคอร์สทั้งหมด
      </h1>
      <Features />
      <CourseList />
    </main>
  );
}