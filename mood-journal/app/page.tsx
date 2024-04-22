import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex w-screen h-screen bg-black items-center justify-center text-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <h1 className="text-6xl mb-4">MoodTrack</h1>
                <p className="text-2xl text-white/60 mb-4">
                    MoodTrack is your personal mood journaling app designed to
                    help you understand and manage your emotions effortlessly.
                    With MoodTrack, you can easily log your daily moods, track
                    patterns, and gain insights into your emotional well-being
                    over time. Whether you're feeling joyful, stressed, or
                    somewhere in between, MoodTrack provides a simple and
                    intuitive interface for recording your emotions and
                    thoughts. Take control of your emotional journey with
                    MoodTrack and start living a more balanced and fulfilling
                    life today.
                </p>
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
        </main>
    )
}
