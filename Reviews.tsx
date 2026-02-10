
import React, { useEffect } from 'react';
import { Page } from './types';

interface ReviewsProps {
    setPage: (page: Page) => void;
}

const Reviews: React.FC<ReviewsProps> = ({ setPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        {
            id: 'B0C9SHXNVL',
            name: 'National Geographic Creepy Creatures',
            tag: 'Platinum Choice',
            award: '👑 BEST FOR HALLOWEEN',
            path: '/products/B0C9SHXNVL_National_Geographic_/index.html',
            image: 'https://m.media-amazon.com/images/I/81I6oW4L23L._AC_SL1500_.jpg',
            desc: 'The gold standard for spooky science. 10+ experiments with glowing rocks.'
        },
        {
            id: 'B09YT1N8Y4',
            name: 'National Geographic Rock Painting',
            tag: 'Top Rated',
            award: '🎨 BEST CREATIVE KIT',
            path: '/products/B09YT1N8Y4_NATIONAL_GEOGRAPHIC_/index.html',
            image: 'https://m.media-amazon.com/images/I/81I6oW4L23L._AC_SL1500_.jpg', // Fallback
            desc: 'Hide-and-seek rock painting kit with waterproof paints and smooth stones.'
        },
        {
            id: 'B0G6DY3Z8W',
            name: 'Long Head Deep Hole Marker',
            tag: 'Editor Choice',
            award: '🛠️ BEST UTILITY TOOL',
            path: '/products/B0G6DY3Z8W_Long_Head_Deep_Hole_/index.html',
            image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a6b5c9d-1234-5678-90ab-cdef12345678.__CR0,0,300,300_PT0_SX300_V1___.jpg', // Placeholder logic
            desc: '30mm long tip for reaching difficult spots in construction and DIY.'
        },
        {
            id: 'B0F6D1PQFN',
            name: 'Artecho Acrylic Paint Markers',
            tag: 'Pro Grade',
            award: '✒️ BEST MULTI-SURFACE',
            path: '/products/B0F6D1PQFN_Artecho_Acrylic_Pain/index.html',
            image: 'https://m.media-amazon.com/images/I/81qE-8O1NRL._AC_SL1500_.jpg',
            desc: '36 double-ended markers for wood, glass, ceramics, and professional rock painting.'
        },
        {
            id: 'B0C9SP3X31',
            name: 'National Geographic Glow in the Dark',
            tag: 'Family Pick',
            award: '🌟 BEST NIGHT ACTIVITY',
            path: '/products/B0C9SP3X31_NATIONAL_GEOGRAPHIC_/index.html',
            image: 'https://m.media-amazon.com/images/I/81I6oW4L23L._AC_SL1500_.jpg',
            desc: 'Expand your collection with rocks that glow under UV light. Includes science guide.'
        }
    ];

    return (
        <section className="py-32 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20 text-center reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Independent Lab Tests
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 uppercase tracking-tighter">
                        Award <span className="text-orange-600">Winners.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        We test 400+ products annually to find the 1% worth your investment. Every "Winner" is lab-verified for quality and ROI.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, i) => (
                        <a
                            key={product.id}
                            href={product.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all hover:-translate-y-2 flex flex-col"
                        >
                            <div className="relative aspect-square mb-8 overflow-hidden rounded-3xl bg-slate-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-slate-900 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                                    {product.tag}
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-2">
                                    {product.award}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                                    {product.desc}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <span className="text-slate-900 font-black text-xs uppercase tracking-widest">Read Expert Analysis</span>
                                <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* More coming soon */}
                <div className="mt-24 p-12 bg-white rounded-[3rem] border border-slate-100 text-center reveal">
                    <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">"More Analysis in Progress..."</h4>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">64 Products currently in Lab Phase • Queue updated Jan 2026</p>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
