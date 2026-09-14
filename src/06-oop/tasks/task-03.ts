/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class Book {
    private status: string; 

    constructor(
        private isbn: string,
        private title: string,
        private author: string,
        private totalPages: number
    ) {
        this.status = "available"; 
    }

    borrow(): void {
        if (this.status === "available") {
            this.status = "borrowed";
            console.log(`Buku "${this.title}" berhasil dipinjam.`);
        } else {
            console.log(`Buku "${this.title}" sedang dipinjam.`);
        }
    }

    returnBook(): void {
        if (this.status === "borrowed") {
            this.status = "available";
            console.log(`Buku "${this.title}" berhasil dikembalikan.`);
        } else {
            console.log(`Buku "${this.title}" tidak sedang dipinjam.`);
        }
    }

    showInfo(): void {
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Penulis: ${this.author}`);
        console.log(`Jumlah Halaman: ${this.totalPages}`);
        console.log(`Status: ${this.status}`);
    }

    isAvailable(): boolean {
        return this.status === "available";
    }
}

const book1 = new Book("978-3-16-148410-0", "Clean Code", "Robert C. Martin", 464);
const book2 = new Book("978-0-13-235088-4", "The Pragmatic Programmer", "Andrew Hunt", 352);    

