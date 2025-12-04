import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative bg-gleamy-black min-h-screen text-white">
            <Header />

            <main className="container mx-auto px-4 lg:px-8 pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins uppercase tracking-wide mb-8">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 font-sans">
                        Ready to start your next project? Send us a message and we'll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider text-gray-400">
                                    Name
                                </label>
                                <input
                                    {...register("name")}
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gleamy-orange transition-colors"
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider text-gray-400">
                                    Email
                                </label>
                                <input
                                    {...register("email")}
                                    id="email"
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gleamy-orange transition-colors"
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wider text-gray-400">
                                Subject
                            </label>
                            <input
                                {...register("subject")}
                                id="subject"
                                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gleamy-orange transition-colors"
                                placeholder="Project Inquiry"
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm">{errors.subject.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider text-gray-400">
                                Message
                            </label>
                            <textarea
                                {...register("message")}
                                id="message"
                                rows={6}
                                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gleamy-orange transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm">{errors.message.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center gap-2 bg-gleamy-orange text-black font-bold uppercase tracking-wide px-8 py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
