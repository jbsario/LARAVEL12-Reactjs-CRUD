// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';


import { Head, Link ,useForm,usePage} from '@inertiajs/react';
import { FormEventHandler } from 'react';
// import { title } from 'process';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Posts() {
    const { posts } = usePage<{ posts: { id: number; title: string; body: string }[] }>().props;

    const {delete: destroy}=useForm();
    const destroyPost: FormEventHandler = (e,id) => {
        e.preventDefault();
        if(confirm('Are you sure you want to delete this post?')){
        destroy(route('posts.destroy',id));
        }
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />






            <div className='flex h-full flex-1 flex-col gap-4 rounded-x1 p-4'>

            <div>
               <Link
                    href={route('posts.create')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create Post
                </Link>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Body</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(({id,title,body})=>(
                        <tr className='bg-gray-50'  key={id}>
                            <td className="px-6 py-2">{id}</td>
                            <td className="px-6 py-2">{title}</td>
                            <td className="px-6 py-2">{body}</td>

                            <td className="px-6 py-2">
                                <form onSubmit={(e)=>destroyPost(e,id)}>
                                <Link
                                href={route('posts.edit',id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </Link>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                                </form>
                            </td>

                        </tr>

))}
                    </tbody>

                </table>
            </div>
            </div>
        </AppLayout>
    );
}
