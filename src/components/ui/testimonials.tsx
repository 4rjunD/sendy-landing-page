import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Testimonials() {
    const testimonials = [
        {
            company: "ABP Agency",
            quote: "We were missing calls after hours and losing potential customers. Sendy's AI Receptionist now answers every call 24/7, and we've booked over 40 new appointments in the first month alone - that's $15,000+ in new business.",
            logo: "ABP"
        },
        {
            company: "FloatFrame Agency",
            quote: "The AI Receptionist replaced our human receptionist with 24/7 availability and better customer service. We've reduced overhead by $5,000 in the first quarter while actually improving our response times.",
            logo: "FF"
        },
        {
            company: "Velocity Sports",
            quote: "Sendy answers our calls instantly, even at 2 AM. In six months, we've captured $30,000 in revenue from calls we would have missed, and saved $20,000 on staffing costs. Best investment we've made.",
            logo: "VS"
        }
    ];

    return (
        <section className="py-16 md:py-32 bg-transparent">
            <div className="mx-auto max-w-6xl space-y-12 px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-semibold lg:text-5xl">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600">See how Sendy helps businesses never miss a customer call</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col p-6 shadow-lg">
                            <CardContent className="flex-1 pt-6">
                                <p className="text-gray-700 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </CardContent>
                            <CardHeader className="pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold">
                                        {testimonial.logo}
                                    </div>
                                    <p className="font-semibold text-gray-900">— {testimonial.company}</p>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}