import Form from '@/components/form';

export default function FormSection() {
    return (
        <section className="py-8 md:py-12">
            <div className="max-w-6xl mx-auto bg-white dark:bg-black-light-2 rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Parlez-nous de votre projet</h2>
                <Form />
            </div>
        </section>
    );
} 