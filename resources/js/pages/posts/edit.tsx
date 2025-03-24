 // import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm ,usePage} from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Post edit',
        href: '/Edit',
    },
];

export default function Edit() {
 const {post} = usePage().props

    const {data, setData,errors,put} = useForm({
        title: post.title || "",
        body: post.body || "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('posts.update',post.id));

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post edit" />






            <div className='flex h-full flex-1 flex-col gap-4 rounded-x1 p-4'>

            <div>
               <Link
                    href={route('posts.index')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </Link>
            </div>
    <form  onSubmit={submit} method='post' className='space-y-6'>

            <div className='grid gap-2'>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        id='title'
                        type="text"
                        className='mt-1 block w-full'
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                        autoCapitalize='off'
                        autoComplete='off'
                        placeholder='Enter title'

                    />
                    <InputError  className='mt-2'   message={errors.title} />
            </div>

            <div className='grid gap-2'>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <textarea
                        id='body'
                        className='mt-1 block w-full'
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        required
                        autoCapitalize='off'
                        autoComplete='off'
                        placeholder=' body'

                    ></textarea>
                    <InputError  className='mt-2'   message={errors.body} />
            </div>


                    <button
                     className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded"
                    >Save</button>

            </form>
            </div>
        </AppLayout>
    );
}
