import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../services/dataService.service';
import { Blog } from '../../services/blog.model';
import { Blogs, allBlogs } from './mock/blogs.mock';

@Component({
    selector: 'app-blog-list',
    templateUrl: 'blogList.component.html',
    styleUrls: ['blogList.component.css']
})

export class BlogListComponent implements OnInit{
    title: string;
    blogs: any[];

    constructor(private dataService: DataService, private http: Http){

    }
    ngOnInit(): void {
        this.title = 'Laatst gepubliceerde Blogs'
        this.dataService.getBlogs()
            .subscribe(blogs => {
                this.blogs = blogs;
                console.log(blogs);
            });
    };

    showAllBlogs(){
        this.title = "Alle Blogs";
        // this.blogs = allBlogs.posts;
    }

    
}