import { toast } from 'react-toastify';

export default function copyText(text: string, notification: string = 'Скопировано!') {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
      toast.success(notification);
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err);
    });
}
