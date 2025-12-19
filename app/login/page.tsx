"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6-digit OTP
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [step, setStep] = useState<"email" | "otp">("email");
  const [countdown, setCountdown] = useState(0);
  const [emailSent, setEmailSent] = useState(false);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Function to handle OTP refs
  const setOtpRef = (index: number) => (el: HTMLInputElement | null) => {
    otpRefs.current[index] = el;
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      pastedData.split('').forEach((char, index) => {
        if (index < 6) {
          newOtp[index] = char;
        }
      });
      setOtp(newOtp);
      
      // Focus the last filled input or the last input
      const lastFilledIndex = Math.min(pastedData.length - 1, 5);
      otpRefs.current[lastFilledIndex]?.focus();
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSendingOtp(true);
    
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsSendingOtp(false);
      setEmailSent(true);
      setStep("otp");
      startCountdown();
      
      // In real app, you would send the OTP to the email
      console.log(`OTP sent to ${email}`);
    }, 1500);
  };

  const startCountdown = () => {
    setCountdown(30);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendOtp = () => {
    if (countdown > 0) return;
    
    setIsSendingOtp(true);
    
    // Simulate API call to resend OTP
    setTimeout(() => {
      setIsSendingOtp(false);
      startCountdown();
      console.log(`OTP resent to ${email}`);
    }, 1000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    
    if (finalOtp.length !== 6) {
      alert("Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);

    // Simulate API call for verification
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
      setIsLoading(false);
    }, 1500);
  };

  const handleBackToEmail = () => {
    setStep("email");
    setEmailSent(false);
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card 
        className="w-112.5"  
        radius="lg"
        shadow="none"
        classNames={{
          base: "bg-white"
        }}
      >
        <CardBody className="p-8 md:p-10">
          {/* Fixed height container to prevent layout shift */}
          <div className="flex flex-col">
            {/* Title - Fixed height */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">
                Admin Portal
              </h1>
              <p className="text-gray-700">
                {step === "email" 
                  ? "Enter your email to receive OTP" 
                  : `Enter OTP sent to ${email}`}
              </p>
            </div>
            {/* Form content with fixed height area */}
            <div className="">
              <form onSubmit={step === "email" ? handleSendOtp : handleLogin} className="h-full">
                {/* Main content area with consistent height */}
                <div className="h-full flex flex-col justify-between">
                  {/* Form fields area */}
                  <div className="">
                    {/* Email Field */}
                    <div className={`transition-all duration-300 ${step === "email" ? "block" : "hidden"}`}>
                      <div className="h-32 flex items-center">
                        <Input
                          type="email"
                          label="Email Address"
                          labelPlacement="outside"
                          placeholder="admin@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          startContent={
                            <Mail className="w-4 h-4 text-gray-700 pointer-events-none" />
                          }
                          variant="bordered"
                          size="lg"
                          required
                          disabled={step === "otp"}
                          classNames={{
                            input: "text-base text-black",
                            label: "text-black font-medium mb-2",
                            inputWrapper: "bg-white border-gray-300"
                          }}
                        />
                      </div>
                    </div>

                    {/* OTP Field */}
                    {step === "otp" && (
                      <div className="animate-fade-in h-32 flex items-center">
                        <div className="">
                          <div className="flex items-center justify-between mb-3">
                            <label className="block text-sm font-medium text-black">
                              Enter OTP
                            </label>
                          </div>
                          
                          <div className="flex gap-3 justify-between">
                            {otp.map((digit, index) => (
                              <Input
                                key={index}
                                ref={setOtpRef(index)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={index === 0 ? handlePaste : undefined}
                                variant="bordered"
                                size="lg"
                                classNames={{
                                  input: "text-center text-xl font-bold text-black",
                                  base: "w-full max-w-[60px]",
                                  inputWrapper: "bg-white border-gray-300"
                                }}
                                required
                                autoFocus={index === 0}
                              />
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center mt-4">
                            <p className="text-xs text-gray-700 max-w-50">
                              Enter the 6-digit code sent to your email
                            </p>
                            <Button
                              variant="light"
                              size="sm"
                              onPress={handleResendOtp}
                              isLoading={isSendingOtp}
                              isDisabled={countdown > 0}
                              className="text-sm text-red-600 hover:text-red-700"
                            >
                              {isSendingOtp ? "Sending..." : countdown > 0 ? `Resend OTP (${countdown}s)` : "Resend OTP"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button - Fixed at bottom */}
                  <div className="pt-8">
                    {step === "email" ? (
                      <Button
                        type="submit"
                        className="w-full font-semibold bg-red-500 text-white hover:bg-red-600"
                        size="lg"
                        isLoading={isSendingOtp}
                        radius="md"
                      >
                        {isSendingOtp ? "Sending OTP..." : "Send OTP"}
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full font-semibold bg-red-500 text-white hover:bg-red-600"
                        size="lg"
                        isLoading={isLoading}
                        radius="md"
                      >
                        {isLoading ? "Verifying..." : "Sign In"}
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </CardBody>
      </Card>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}