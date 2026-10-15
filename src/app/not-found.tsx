import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 editorial-bg text-center">
      <div className="w-16 h-16 rounded-full bg-[#F2E4D8] text-[#965239] flex items-center justify-center font-serif text-2xl font-bold mb-6 border border-[#EAD8C8]">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#29251F] mb-3">
        Page Not Found
      </h1>
      <p className="text-[#6E675F] max-w-md text-sm sm:text-base mb-8">
        The page you are looking for doesn&apos;t exist or has moved. Return to Neeraj Kumar&apos;s portfolio.
      </p>
      <Button href="/" variant="primary" icon={<ArrowLeft size={16} />}>
        Back to Home
      </Button>
    </div>
  );
}
