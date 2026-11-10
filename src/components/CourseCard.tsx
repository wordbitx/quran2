import Link from "next/link";
import type { Course } from "@/lib/data";
import { courseIcon } from "@/lib/icons";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="spec-card group flex flex-col items-center justify-start rounded-[16px] border border-[#dae6f8] bg-white px-2 pb-3 pt-3.5 text-center shadow-[0_6px_18px_rgba(9,45,105,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d1f2] hover:shadow-[0_16px_30px_rgba(9,45,105,0.16)]"
    >
      <span
        className="ic flex h-[3.3rem] w-[3.3rem] items-center justify-center text-navy transition duration-300 group-hover:scale-[1.06] [&_svg]:h-[3rem] [&_svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: courseIcon(course.slug, course.icon) }}
        aria-hidden="true"
      />
      <h3 className="mt-1.5 text-[0.98rem] font-extrabold leading-[1.2] text-[#0b2a5e]">
        {course.name}
      </h3>
    </Link>
  );
}
