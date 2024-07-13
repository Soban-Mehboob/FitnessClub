import imgOne from '../assets/pexels-olly-3764014.jpg';
import imgTwo from '../assets/pexels-celildogan-10810453.jpg';
import imgThree from '../assets/pexels-scottwebb-136405.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {
    const teamMembers = [
        {
            id: 1,
            name: 'John Doe',
            designation: 'Head Trainer',
            bio: 'Certified personal trainer with over 10 years of experience in fitness coaching.',
            image: require('../assets/pexels-marcuschanmedia-17898141.jpg'),
        },
        {
            id: 2,
            name: 'Jane Smith',
            designation: 'Nutritionist',
            bio: 'Expert in dietary planning and sports nutrition.',
            image: require('../assets/pexels-mikhail-nilov-6740056.jpg'),
        },
        {
            id: 3,
            name: 'Emily Johnson',
            designation: 'Female Trainer',
            bio: 'Specializes in women\'s fitness and pre/post-natal training.',
            image: require('../assets/pexels-scottwebb-136405.jpg'),
        },
    ];

    const successStories = [
        {
            id: 1,
            name: 'Alex Turner',
            description: 'Lost 20kg and built muscle through our personalized training programs.',
            avatar: require('../assets/pexels-marcuschanmedia-17898141.jpg'),
        },
        {
            id: 2,
            name: 'Sarah Brown',
            description: 'Improved overall health and fitness with our nutritionist guidance.',
            avatar: require('../assets/pexels-mikhail-nilov-6740056.jpg'),
        },
        {
            id: 3,
            name: 'Michael Johnson',
            description: 'Achieved peak performance for his marathon training.',
            avatar: require('../assets/pexels-scottwebb-136405.jpg'),
        },
        {
            id: 4,
            name: 'Emily Davis',
            description: 'Transformed her lifestyle and gained confidence through fitness.',
            avatar: require('../assets/pexels-olly-3764014.jpg'),
        },
        {
            id: 5,
            name: 'David Smith',
            description: 'Lost 15kg and improved his stamina with our tailored programs.',
            avatar: require('../assets/pexels-celildogan-10810453.jpg'),
        },
        {
            id: 6,
            name: 'Sophia Lee',
            description: 'Achieved her weight loss goals and built a strong community.',
            avatar: require('../assets/pexels-mikhail-nilov-6740056.jpg'),
        },
    ];

    const [currentStory, setCurrentStory] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStory((prev) => (prev + 1) % successStories.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='mt-28'>
            {/* First Section */}
            <section className='flex'>
                <div className='flex flex-col sm:flex-row text-center items-center sm:items-start'>
                    <div className='sm:ml-10'>
                        <motion.img
                            src={imgOne}
                            className='w-75 h-75 object-cover'
                            style={{ width: 300, height: 300 }}
                            alt="Mission"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                    <div className='sm:ml-6 sm:mt-20 mt-6 max-w-xs'>
                        <p>
                            Our mission is to empower individuals to achieve their fitness goals through personalized training,
                            community support, and a welcoming environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className='flex justify-end'>
                <div className='flex flex-col sm:flex-row-reverse text-center items-center sm:items-start'>
                    <div className='sm:mr-10'>
                        <motion.img
                            src={imgTwo}
                            className='w-75 h-75 object-cover'
                            style={{ width: 300, height: 300 }}
                            alt="History"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                    <div className='sm:mr-6 sm:mt-20 mt-6 max-w-xs'>
                        <p>
                            Founded in 2020, our gym has grown from a small community center to a thriving fitness hub with over 1,000 members and numerous accolades.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-center mt-16 text-white">Our Team</h2>
                <hr className='border-white' />
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20">
                    {teamMembers.map(member => (
                        <motion.div
                            key={member.id}
                            className="bg-red-450 text-white rounded-lg shadow-md p-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-full rounded-lg mb-4 object-cover"
                                style={{ width: 300, height: 350 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <h3 className="text-lg font-medium">{member.name}</h3>
                            <p className="text-gray-300">{member.designation}</p>
                            <p className="mt-2 text-gray-200">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            
            {/* Success Stories Section */}

            <h2 className="text-2xl font-semibold text-center mt-16 text-white">Success Stories Section</h2>
            <hr className='border-white' />
            <section className="flex justify-center items-center mt-16 pb-10">
                
                <div className="bg-black text-white rounded-lg shadow-md p-4 flex flex-col items-center"
                     style={{ width: 800, height: 200 }}>
                        
                    <motion.img
                        src={successStories[currentStory].avatar}
                        alt={successStories[currentStory].name}
                        className="rounded-full mb-4"
                        style={{ width: 80, height: 80 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <h3 className="text-lg font-medium">{successStories[currentStory].name}</h3>
                    <p className="text-gray-300 mt-2 text-center">{successStories[currentStory].description}</p>
                    <p className="mt-2 text-gray-200">With our tailored guidance, {successStories[currentStory].name} has achieved remarkable transformations.</p>
                </div>
            </section>
        </div>
    );
}
