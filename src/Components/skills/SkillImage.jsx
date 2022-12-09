import html from '../images/skills/html.svg'
import photoshop from '../images/skills/photoshop.svg'
import css from '../images/skills/css.svg'
import javascript from '../images/skills/javascript.svg'
import nextJS from '../images/skills/nextJS.svg'
import nuxtJS from '../images/skills/nuxtJS.svg'
import react from '../images/skills/react.svg'
import svelte from '../images/skills/svelte.svg'
import typescript from '../images/skills/typescript.svg'
import vue from '../images/skills/vue.svg'
import bootstrap from '../images/skills/bootstrap.svg'
import bulma from '../images/skills/bulma.svg'
import capacitorjs from '../images/skills/capacitorjs.svg'
import coffeescript from '../images/skills/coffeescript.svg'
import memsql from '../images/skills/memsql.svg'
import mongoDB from '../images/skills/mongoDB.svg'
import mysql from '../images/skills/mysql.svg'
import postgresql from '../images/skills/postgresql.svg'
import tailwind from '../images/skills/tailwind.svg'
import vitejs from '../images/skills/vitejs.svg'
import vuetifyjs from '../images/skills/vuetifyjs.svg'
import c from '../images/skills/c.svg'
import cplusplus from '../images/skills/cplusplus.svg'
import csharp from '../images/skills/csharp.svg'
import dart from '../images/skills/dart.svg'
import go from '../images/skills/go.svg'
import java from '../images/skills/java.svg'
import julia from '../images/skills/julia.svg'
import kotlin from '../images/skills/kotlin.svg'
import matlab from '../images/skills/matlab.svg'
import php from '../images/skills/php.svg'
import python from '../images/skills/python.svg'
import ruby from '../images/skills/ruby.svg'
import swift from '../images/skills/swift.svg'
import adobeaudition from '../images/skills/adobeaudition.svg'
import aws from '../images/skills/aws.svg'
import deno from '../images/skills/deno.svg'
import django from '../images/skills/django.svg'
import firebase from '../images/skills/firebase.svg'
import gimp from '../images/skills/gimp.svg'
import git from '../images/skills/git.svg'
import graphql from '../images/skills/graphql.svg'
import lightroom from '../images/skills/lightroom.svg'
import materialui from '../images/skills/materialui.svg'
import nginx from '../images/skills/nginx.svg'
import numpy from '../images/skills/numpy.svg'
import opencv from '../images/skills/opencv.svg'
import premierepro from '../images/skills/premierepro.svg'
import pytorch from '../images/skills/pytorch.svg'
import selenium from '../images/skills/selenium.svg'
import strapi from '../images/skills/strapi.svg'
import tensorflow from '../images/skills/tensorflow.svg'
import webix from '../images/skills/webix.svg'
import wordpress from '../images/skills/wordpress.svg'

import postman from '../images/skills/postman.svg'
import azure from '../images/skills/azure.svg'
import blender from '../images/skills/blender.svg'
import fastify from '../images/skills/fastify.svg'
import figma from '../images/skills/figma.svg'
import flutter from '../images/skills/flutter.svg'
import haxe from '../images/skills/haxe.svg'
import ionic from '../images/skills/ionic.svg'
import markdown from '../images/skills/markdown.svg'
import microsoftoffice from '../images/skills/microsoftoffice.svg'
import picsart from '../images/skills/picsart.svg'
import sketch from '../images/skills/sketch.svg'
import unity from '../images/skills/unity.svg'
import wolframalpha from '../images/skills/wolframalpha.svg'
import canva from '../images/skills/canva.svg'
import redux from '../images/skills/redux.svg'
import npm from '../images/skills/npm.svg'
import express from '../images/skills/express.svg'
import node from '../images/skills/node.svg'
import netlify from '../images/skills/netlify.svg'
import heroku from '../images/skills/heroku.svg'
import styled from '../images/skills/styled.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'redux':
            return redux;
            case 'styled-components':
                return styled;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'npm':
            return npm;
        case 'netlify':
            return netlify;
        case 'heroku':
            return heroku;
        case 'express js':
            return express;
        case 'css':
            return css;
        case 'postman':
            return postman;    
        case 'node js':
            return node;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        default:
            break;
    }
}