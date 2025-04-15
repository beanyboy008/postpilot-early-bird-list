
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

interface EmailSignupFormProps {
  buttonText?: string;
  compact?: boolean;
  className?: string;
}

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ 
  buttonText = "Join Waitlist", 
  compact = false,
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('You\'ve been added to the waitlist!');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full max-w-lg ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`h-12 px-4 ${compact ? 'text-sm' : 'text-base'} rounded-lg border-gray-300 focus-visible:ring-purple-500`}
        required
      />
      <Button 
        type="submit" 
        disabled={loading}
        className={`h-12 ${compact ? 'px-4' : 'px-6'} font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white`}
      >
        {loading ? "Processing..." : buttonText}
        {!compact && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </form>
  );
};

export default EmailSignupForm;
