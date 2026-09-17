import { ref } from 'vue';

const isOpen = ref(false);

export function useContactModal() {
    const open = () => {
        isOpen.value = true;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const close = () => {
        isOpen.value = false;
        document.body.style.overflow = ''; // Restore scrolling
    };

    const toggle = () => {
        if (isOpen.value) {
            close();
        } else {
            open();
        }
    };

    return {
        isOpen,
        open,
        close,
        toggle
    };
}
