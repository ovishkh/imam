import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='border-b border-border bg-background sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-2 group transition-opacity hover:opacity-90'>
          <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20'>
            <span className='text-primary-foreground font-bold text-lg'>I</span>
          </div>
          <span className='font-bold text-xl tracking-tight text-foreground'>Imam</span>
        </Link>

        <div className='flex items-center gap-3'>
          <Button variant='outline' size='sm'>
            Sign in
          </Button>
          <Button size='sm'>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
