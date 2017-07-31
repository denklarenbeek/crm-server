import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/dataService.service';
import { Blog } from '../../services/blog.model';

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
    blog: any;
    authors: any;
    param: string = '597b7d5f727823a4ad3b8f8f'
    
    constructor(private dataService: DataService, private fb: FormBuilder){

    }
    
    ngOnInit() {
        this.dataService.getOneBlog(this.param)
            .subscribe((result) => {
                this.blog = result

                this.dataService.getAuthors()
                    .subscribe((result) => {
                        this.authors = result
                        this.initForm()
                    })
            });
    };

    // Init the form when the data actually back from the sever instead of rendering it async
    private initForm(){
        this.blogForm = this.fb.group({
            title: [this.blog.title],
            body: [this.blog.body],
            author: [this.blog.author._id]
        });
    }
};