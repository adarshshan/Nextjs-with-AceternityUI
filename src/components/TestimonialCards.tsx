'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
        name: 'Alex Johnson',
        title: 'Guitar Student',
    },
    {
        quote: 'The piano lessons at this music school have been incredible. The teachers are patient, knowledgeable, and always encouraging.',
        name: 'Emily Davis',
        title: 'Piano Student',
    },
    {
        quote: 'I never thought I could learn to play the drums, but the instructors made it possible. They break down complex rhythms into manageable steps.',
        name: 'Michael Lee',
        title: 'Drum Student',
    },
    {
        quote: 'The vocal training here has boosted my confidence and improved my singing technique immensely. I highly recommend this school.',
        name: 'Sarah Brown',
        title: 'Vocal Student',
    },
    {
        quote: 'As a violin student, I have found the teaching methods here to be exceptional. The progress I have made in a short time is unbelievable.',
        name: 'David Wilson',
        title: 'Violin Student',
    },
    {
        quote: 'The theory classes have given me a deeper understanding of music. The instructors make learning theory engaging and fun.',
        name: 'Jessica Martinez',
        title: 'Music Theory Student',
    },
    {
        quote: 'Learning the saxophone at this music school has been a fantastic experience. The lessons are well-structured and enjoyable.',
        name: 'Christopher Taylor',
        title: 'Saxophone Student',
    },
    {
        quote: 'The environment at this music school is so supportive. I have grown as a musician and made great friends along the way.',
        name: 'Sophia Anderson',
        title: 'Flute Student',
    },
    {
        quote: 'I appreciate the personalized approach the instructors take. They really care about my progress and tailor the lessons to my needs.',
        name: 'James Thompson',
        title: 'Cello Student',
    },
    {
        quote: 'The workshops and masterclasses offered here are top-notch. I have learned so much from the visiting artists and guest lecturers.',
        name: 'Olivia Hernandez',
        title: 'Clarinet Student',
    }
];

const MusicSchoolTestimonials = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicSchoolTestimonials
