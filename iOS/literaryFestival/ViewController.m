//
//  ViewController.m
//  literaryFestival
//
//  Created by Daniel Wiedemann on 13.12.12.
//  Copyright (c) 2012 Daniel Wiedemann. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end



@implementation ViewController

@synthesize webView;

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    
    //[webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"http://localhost/~WiedemannD/literaryFestival"]]];
    
    webView.delegate = self;
    webView.scrollView.bounces = NO;
    
    NSString *indexPath = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:indexPath]]];
}

-(BOOL) webView:(UIWebView *)inWeb shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)inType {
    
    NSRange isExt = [request.URL.query rangeOfString:@"extOpen=true"];
    
    // check if link should be opened externally
    if(request.URL.query != nil && isExt.location != NSNotFound)
    {
        //NSLog(@"extOpen%@", request.URL);
        
        [[UIApplication sharedApplication] openURL:[request URL]];
        return NO;
    }

    //NSLog(@"intOpen %@", request.URL);
    
    // else open internally
    return YES;
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)dealloc {
    [webView release];
    [super dealloc];
}

@end
