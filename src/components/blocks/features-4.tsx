import { Phone, Clock, Calendar, MessageSquare, TrendingUp, Shield } from 'lucide-react'

export function Features() {
    return (
        <section id="features" className="py-12 md:py-20 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">How Sendy Works</h2>
                    <p className="text-gray-600">Your AI receptionist handles every call with the professionalism of a human assistant, powered by advanced AI technology.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Phone className="size-5 text-pink-500" />
                            <h3 className="text-base font-semibold">Instant Call Answering</h3>
                        </div>
                        <p className="text-sm text-gray-600">Answers every call in under 2 seconds, day or night. No more missed opportunities or frustrated customers.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Clock className="size-5 text-pink-500" />
                            <h3 className="text-base font-semibold">24/7 Availability</h3>
                        </div>
                        <p className="text-sm text-gray-600">Never miss a call again. Sendy works around the clock, even on weekends and holidays.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Calendar className="size-5 text-pink-500" />
                            <h3 className="text-base font-semibold">Appointment Booking</h3>
                        </div>
                        <p className="text-sm text-gray-600">Automatically schedules appointments directly into your calendar while you focus on your business.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="size-5 text-pink-500" />
                            <h3 className="text-base font-semibold">Smart Call Handling</h3>
                        </div>
                        <p className="text-sm text-gray-600">Understands customer questions and provides accurate information about your business and services.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="size-5 text-pink-500" />
                            <h3 className="text-base font-semibold">Lead Qualification</h3>
                        </div>
                        <p className="text-sm text-gray-600">Asks the right questions to qualify leads and route urgent calls to you immediately.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Shield className="size-5 text-pink-500" />
                            <h3 className="text-base font-semibold">Custom Training</h3>
                        </div>
                        <p className="text-sm text-gray-600">Trained specifically on your business, services, and processes to represent you perfectly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}