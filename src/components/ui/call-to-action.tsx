import { Button } from '@/components/ui/button'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-500 to-pink-600">
            <div className="mx-auto max-w-5xl px-6">
                <div className="space-y-6 text-center">
                    <h2 className="text-white text-balance text-3xl font-semibold lg:text-5xl">
                        Ready to Answer Every Customer Call?
                    </h2>
                    <p className="text-pink-50 text-lg max-w-2xl mx-auto">
                        Join businesses that never miss an opportunity. Get your AI receptionist set up in 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <a href="https://cal.com/arjun-dixit-0nwkzi/15min" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                                Book Your Demo
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}