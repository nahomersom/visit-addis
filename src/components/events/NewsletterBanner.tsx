import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNewsletterSubscription } from '@/hooks/useNewsletter';
import { Loader2, CheckCircle2 } from 'lucide-react'; 

const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" })
    .refine((email) => {
      const parts = email.split('@');
      if (parts.length !== 2) return false;
      
      const domain = parts[1];
      const domainSegments = domain.split('.');
      const tld = domainSegments[domainSegments.length - 1];

      // Check if TLD exists and is at least 2 characters (e.g., .co, .com)
      return domainSegments.length > 1 && tld && tld.length >= 2;
    }, { message: "Please enter a valid email provider" }),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

const NewsletterBanner: React.FC = () => {
  const { mutate, isPending, isSuccess, isError, reset: resetMutation } = useNewsletterSubscription();

  const {
    register,
    handleSubmit,
    reset: resetForm,
    setError,
    formState: { errors },
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSuccess) {
      timer = setTimeout(() => {
        resetMutation(); // Clears the success state after 5 seconds
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSuccess, resetMutation]);

  const onSubmit = (data: SubscribeFormValues) => {
    mutate(data.email, {
      onSuccess: () => {
        resetForm();
      },
      onError: (err) => {
        const apiMessage = err.response?.data?.error?.message || "Something went wrong.";
        setError("email", { type: "manual", message: apiMessage });
      },
    });
  };

  // Helper to handle input change and reset API states
  const { onChange: formOnChange, ...restRegister } = register("email");

  return (
    <section 
      aria-label="Newsletter Subscription"
      className="
      w-full max-w-[1512px] mx-auto 
      flex flex-col items-center justify-center 
      bg-white
      py-10 md:py-12 xl:py-10
      px-6 md:px-12 xl:px-[120px]
      gap-6
    ">
      
      <div className="
        relative w-full md:max-w-[1272px] 
        h-[400px] md:h-auto md:min-h-[231px]
        rounded-3xl p-10 
        flex flex-col items-center justify-center 
        gap-4 overflow-hidden bg-[#EAF4FA] shadow-sm isolation-auto
      ">
        
        {/* Backgrounds */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/images/NewsBg.jpg')" }} 
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-[#EAF4FA] via-white/40 to-[#EAF4FA] opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[660px] gap-4">
          
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-[24px] font-bold text-[#10383A] leading-tight">
              Never Miss a Moment!
            </h2>
            <p className="text-[14px] text-[#758886] font-normal">
              Unlock Addis Ababa's best-kept secrets! Subscribe now for a monthly guide to exclusive cultural events.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full md:w-auto mt-2 md:mt-0 gap-2 items-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
              
              <div className="relative w-full md:w-[320px]">
                <input 
                  onChange={(e) => {
                    formOnChange(e);
                    if (isSuccess || isError) resetMutation(); 
                  }}
                  {...restRegister}
                  type="email" 
                  placeholder="Enter Email Address" 
                  disabled={isPending}
                  className={`
                    w-full rounded-[100px] border bg-white 
                    py-3 px-6 text-[14px] text-[#758886] outline-none 
                    transition-all placeholder:text-[#B0B0B0]
                    ${errors.email ? "border-red-500 focus:border-red-500 ring-1 ring-red-100" : "border-[#E0E0E0] focus:border-[#DAA520]"}
                    ${isSuccess ? "border-green-500" : ""}
                  `}
                />
              </div>
              
              <button
                type="submit"
                disabled={isPending}
                className="
                  w-full md:w-auto rounded-[105px] bg-[#DAA520] hover:bg-[#C59216] 
                  disabled:bg-[#DAA520]/80 disabled:cursor-not-allowed
                  text-white font-medium py-3 px-8 transition-colors shadow-sm
                  flex items-center justify-center gap-2 min-w-[140px]
                  cursor-pointer
                "
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            <div className="h-6 text-[12px] flex items-center justify-center">
              
              {/* Error Message */}
              {errors.email && (
                <span className="text-red-500 font-medium animate-in fade-in slide-in-from-top-1">
                  {errors.email.message}
                </span>
              )}

              {/* Success Message - Only shows if NOT loading and IS Success */}
              {isSuccess && !isPending && !errors.email && (
                <span className="text-green-600 font-medium flex items-center gap-1.5 animate-in fade-in zoom-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  You have successfully subscribed!
                </span>
              )}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;