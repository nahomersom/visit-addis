import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNewsletterSubscription } from "@/hooks/useNewsletter";
import { Loader2, CheckCircle2 } from "lucide-react";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const BlogNewsLetter: React.FC = () => {
  const { mutate, isPending, isSuccess, isError, reset: resetMutation } = useNewsletterSubscription();

  //React Hook Form Setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  //Submit Handler
  const onSubmit = (data: NewsletterFormValues) => {
    mutate(data.email, {
      onSuccess: () => {
        reset(); // Clear form input
        setTimeout(() => resetMutation(), 5000); 
      },
      onError: (error) => {
        console.error("Subscription failed", error);
      }
    });
  };

  return (
    // Main Container
    <div className="w-full max-w-[1512px] mx-auto flex flex-col items-center justify-center bg-white
                    py-10 px-6 gap-6
                    md:py-10 md:px-12 md:gap-6
                    xl:px-[120px] xl:py-10">
      
      {/* Card */}
      <div className="relative w-full 
                      h-[400px] 
                      md:h-auto md:min-h-[231px] md:rounded-3xl md:p-10 md:gap-4
                      xl:rounded-3xl xl:p-10
                      
                      rounded-3xl p-6 flex flex-col items-center justify-center gap-6
                      overflow-hidden bg-[#EAF4FA] shadow-sm isolation-auto">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/images/NewsBg.jpg')" }} 
        ></div>
        
        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#EAF4FA] via-white/40 to-[#EAF4FA] opacity-80 z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[600px] 
                        gap-4 md:gap-4">
          
          {/* Heading & Description */}
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-[24px] font-bold text-[#10383A] leading-tight">
              <span className="text-[#1EAA9D]">Subscribe</span> to our newsletter
            </h2>
            <p className="text-[14px] text-[#758886] font-normal">
              Stay connected and don’t miss our exciting updates and exclusive deals!
            </p>
          </div>

          {/* Form Section */}
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full md:w-auto mt-2 md:mt-0 gap-2"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full md:w-auto relative">
              
              <input 
                {...register("email")}
                type="email" 
                placeholder="Enter Email Address" 
                disabled={isPending || isSuccess}
                className={`
                  w-full md:w-[320px] rounded-[100px] border bg-white 
                  py-3 px-6 text-[14px] text-[#758886] outline-none 
                  transition-colors placeholder:text-[#B0B0B0]
                  ${errors.email || isError ? 'border-red-400 focus:border-red-400' : 'border-[#E0E0E0] focus:border-[#DAA520]'}
                `}
              />
              
              <button
                type="submit"
                disabled={isPending || isSuccess}
                className={`
                  w-auto min-w-[140px] rounded-[105px] font-medium py-3 px-8 transition-all whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer
                  ${isSuccess 
                    ? 'bg-[#1EAA9D] hover:bg-[#17857a] text-white' 
                    : 'bg-[#DAA520] hover:bg-[#C59216] text-white'}
                  ${isPending ? 'opacity-80 cursor-not-allowed' : ''}
                `}
              >
                {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                {isSuccess && <CheckCircle2 className="w-4 h-4" />}
                
                {isPending ? 'Sending...' : isSuccess ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>

            {errors.email && (
              <p className="text-red-500 text-[12px] mt-1 font-medium">
                {errors.email.message}
              </p>
            )}

            {isError && !errors.email && (
              <p className="text-red-500 text-[12px] mt-1 font-medium">
                Something went wrong. Please try again.
              </p>
            )}
            
            {isSuccess && (
              <p className="text-[#1EAA9D] text-[12px] mt-1 font-medium">
                Successfully subscribed!
              </p>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

export default BlogNewsLetter;