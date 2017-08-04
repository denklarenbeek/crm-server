import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/dataService.service';
import { Blog } from '../../services/blog.model';
import { MessageService } from '../../services/messageService.service';

@Component({
    selector: 'app-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css']
})

export class BlogComponent implements OnInit {
    blogForm: FormGroup;
    id: number;
    sub: any;
    title:string = "Wordt titel de blog";
    blog: any = {};
    author: string;
    authors: any;
    param: string;
    
    constructor (
        private dataService: DataService, 
        private fb: FormBuilder, 
        private route: ActivatedRoute,
        private router: Router,
        private messages: MessageService
    ){ }
    
    ngOnInit() {
        this.route.params.subscribe((result) => {
            if(!Object.keys(result).length){
                this.initForm('', '', '')
                this.getAuthors();
                return;
            };
            this.param = result['id']

            this.dataService.getOneBlog(this.param)
            .subscribe((result) => {
                this.blog = result
                this.getAuthors()
                this.initForm(this.blog['title'], this.blog['body'], this.blog['author']._id)
            });
        }); 
    };

    private getAuthors(){
        this.dataService.getAuthors()
            .subscribe((result) => {
                this.authors = result
            });
    };

    // Init the form when the data actually back from the sever instead of rendering it async
    private initForm(titleObject, bodyObject, authorObject){
        this.blogForm = this.fb.group({
            title: [titleObject],
            body: [bodyObject],
            author: [authorObject]
        });
    };

    private onSubmit(e){
        e.preventDefault();
        this.blog.author = this.blogForm.get('author').value;
        this.blog.body = this.blogForm.get('body').value;
        this.blog.title = this.blogForm.get('title').value;
        if(this.param === undefined) {
            const blog = Object.keys(this.blog);
            console.log(this.blog);
            debugger;
            this.dataService.createOneBlog(this.blog).subscribe((result) => {
                const blogId = result._id;
                console.log('Created response')
                // this.messages.addMessage('Blog created', 'success');
                this.router.navigate([`/blog/${blogId}`])
            })
        } else {
            this.dataService.updateOneBlog(this.blog).subscribe ((result) => {
                console.log('Updated response')
                this.messages.addMessage(`Blog "${this.blog.title}" updated`, 'success');
            });
        }   
    };
};