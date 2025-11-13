import React from "react";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "../assets/images/logo-square.png";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={logoImage}
                alt="Peter Unsworth LLC Logo"
                className="w-20 h-20 rounded-lg"
              />
              <h3 className="tracking-tight">Peter Unsworth</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Technical Strategy & Consulting at the intersection of business requirements 
              and technical excellence.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm">Companies</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Peter Unsworth LLC</div>
              <div>
                <a
                  href="https://frontedgedigital.com"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Front Edge Digital
                </a>
              </div>
              <div>
                <a
                  href="https://devsforcode.com"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev's For Code
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm">Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Technical Strategy</div>
              <div>Talent Recruitment</div>
              <div>Digital Solutions</div>
              <div>Team Augmentation</div>
              <div>
                <a
                  href="https://www.joesalowitz.com/"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product Strategy
                </a>
              </div>
              <div>
                <a
                  href="https://paradoxcomms.com/"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marketing Plans
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Peter Unsworth LLC. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/peterunsworth/" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@knowenoughstuff"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a href="https://frontedgedigital.com" className="hover:text-foreground transition-colors">
              Front Edge Digital
            </a>
            <a href="https://devsforcode.com" className="hover:text-foreground transition-colors">
              Dev's For Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}