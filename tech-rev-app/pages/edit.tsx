import Link from 'next/link'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
 
import { Editor } from '@toast-ui/react-editor';


const edit = () => {
    return (
        <div>
            <Editor
                initialValue=""
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />
            <div className="grid grid-cols-2 gap-4">
                <button className="bg-yellow-300  hover:bg-yellow-200">投稿</button>
                <button className="bg-yellow-300  hover:bg-yellow-200">下書き</button>
            </div>
            <Link href="/"><a className="text-3xl pl-2 bg-blue-100">ホームに戻る</a></Link>
        </div>
    );
};

export default edit;