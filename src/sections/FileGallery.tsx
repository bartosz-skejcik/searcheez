import { File } from "@/components";

type Props = {
    files: any[];
};

const formatFileSize = (size: number) => {
    // the size is in bytes
    if (size < 1024) {
        return size + " B";
    } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + " KB";
    } else if (size < 1024 * 1024 * 1024) {
        return (size / 1024 / 1024).toFixed(2) + " MB";
    } else if (size < 1024 * 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024).toFixed(2) + " GB";
    } else {
        return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + " TB";
    }
};

export default function FileGallery({ files }: Props) {
    return (
        <div className="flex flex-col items-center justify-start w-full gap-3 overflow-x-hidden md:w-11/12 lg:w-full md:-ml-10 lg:-ml-10 xl:-ml-80">
            {files.map((file, index) => {
                return (
                    <File
                        index={index}
                        key={index}
                        file={file}
                        formatFileSize={formatFileSize}
                    />
                );
            })}
        </div>
    );
}
