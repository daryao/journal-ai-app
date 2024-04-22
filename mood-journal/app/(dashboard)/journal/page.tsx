import Image from "next/image";
import Link from "next/link";

const JournalPage = () => {
    return (
    <div className="container mx-auto px-6 max-w-5xl">
    <h1 className="text-6xl mb-4">MoodTrack</h1>
    <p className="text-2xl text-white/60 mb-4">    </p>
    <div>
      <Link href="/journal">
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
        >
          Start here
        </button>
      </Link>
    </div>
  </div>
  );

}

export default JournalPage;
