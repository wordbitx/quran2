import Link from "next/link";
import type { Course } from "@/lib/data";
import { courseIcon } from "@/lib/icons";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="spec-card group flex flex-col items-center justify-start rounded-[16px] border border-[#dbe7f8] bg-white px-2 pb-3 pt-3 text-center shadow-[0_6px_18px_rgba(9,45,105,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d1f2] hover:shadow-[0_18px_32px_rgba(9,45,105,0.16)]"
    >
      <span className="relative flex h-[3.4rem] w-[3.4rem] items-center justify-center">
        {/* soft blue halo behind the glossy icon */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_62%,#e3efff_0%,rgba(227,239,255,0)_72%)]"
          aria-hidden="true"
        />
        <span
          className="ic relative flex h-full w-full items-center justify-center text-navy transition duration-300 group-hover:scale-[1.07] [&_svg]:h-[2.9rem] [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: courseIcon(course.slug, course.icon) }}
          aria-hidden="true"
        />
      </span>
      <h3 className="mt-1.5 text-[0.97rem] font-extrabold leading-[1.2] text-[#0b2a5e]">
        {course.name}
      </h3>
    </Link>
  );
}
