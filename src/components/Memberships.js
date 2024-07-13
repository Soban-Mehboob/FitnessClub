import { motion } from 'framer-motion';

const MembershipCard = ({ title, price, requirements, isHighlighted }) => {
    return (
        <motion.div
            className={` text-white rounded-lg shadow-lg p-6 transition-transform transform ${isHighlighted ? 'border-2 border-red-600' : ''}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            <h3 className="text-2xl font-semibold text-center text-red-600">{title}</h3>
            <p className="text-4xl font-bold text-center mt-2 text-red-600">${price}</p>
            <hr className="my-4 border-red-600" />
            <h4 className="font-medium">Requirements:</h4>
            <ul className="list-disc list-inside mt-2">
                {requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                ))}
            </ul>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
                Join Now
            </button>
        </motion.div>
    );
};

export default function MembershipSection() {
    const memberships = [
        {
            title: 'Basic',
            price: 15,
            requirements: [
                'Access to gym equipment',
                'Free group classes',
            ],
        },
        {
            title: 'Standard',
            price: 25,
            requirements: [
                'Access to gym equipment',
                'Free group classes',
                'Personal training session (1/month)',
            ],
        },
        {
            title: 'Premium',
            price: 50,
            requirements: [
                'All Standard benefits',
                'Unlimited personal training',
                'Nutrition counseling',
            ],
        },
    ];

    return (
        <div className="flex justify-center gap-8 mt-20">
            {memberships.map((membership, index) => (
                <MembershipCard
                    key={index}
                    title={membership.title}
                    price={membership.price}
                    requirements={membership.requirements}
                    isHighlighted={membership.title === 'Standard'}
                />
            ))}
        </div>
    );
}
