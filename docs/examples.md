---
layout: single
title: Markdown examples
nav_order: 1
---

# Callouts

Callouts can be used to draw attention to specific text.  Here are
some examples:


```markdown
{: .warning }
A paragraph
```

{: .highlight }
**Warning**:  you should pay special attention to this

```markdown
{: .danger }
**Important**:  If you don't do this thing, something will break!
```

{: .danger }
**Important**:  If you don't do this thing, something will break!

{: .info }
> **Note**:  This is an aside point that's pretty useful, or maybe a
> reference to go check out something important in another document.
> 
> For example, you can also have line breaks in callouts, as long as
> you add `>` characters to the front of each line.

{: .success }
> **Success!**  Use this to call attention to something that happens
at the end of a task.

{: .concept }
> **New concept**:  Use this one to draw attention to new background
> info or things students haven't seen before.

> This is just some indented text.  It's for things that aren't that
> important, or only matter for edge cases.

### Expandable callouts

{: .concept }
> <details markdown="1"><summary markdown="span">**Click to learn more
> about this thing**</summary>
> 
> You can also add larger amounts of text, include lists, etc:
> - Here's a list item
>
> - Here's another list item, this one goes onto multiple lines and
>   that's just fine
> </details>




#### A single paragraph callout
{: .no_toc }

```markdown
{: .note }
A paragraph
```

{: .note }
A paragraph

```markdown
{: .note-title }
> My note title
>
> A paragraph with a custom title callout
```

{: .note-title }
> My note title
>
> A paragraph with a custom title callout

#### A multi-paragraph callout
{: .no_toc }

```markdown
{: .important }
> A paragraph
>
> Another paragraph
>
> The last paragraph
```

{: .important }
> A paragraph
>
> Another paragraph
>
> The last paragraph

```markdown
{: .important-title }
> My important title
>
> A paragraph
>
> Another paragraph
>
> The last paragraph
```

{: .important-title }
> My important title
>
> A paragraph
>
> Another paragraph
>
> The last paragraph

#### An indented callout
{: .no_toc }

```markdown
> {: .highlight }
  A paragraph
```

> {: .highlight }
  A paragraph

#### Indented multi-paragraph callouts
{: .no_toc }

```markdown
> {: .new }
> > A paragraph
> >
> > Another paragraph
> >
> > The last paragraph
```

> {: .new }
> > A paragraph
> >
> > Another paragraph
> >
> > The last paragraph


#### Nested callouts
{: .no_toc }

```markdown
{: .important }
> {: .warning }
> A paragraph
```

{: .important }
> {: .warning }
> A paragraph

#### Opaque background
{: .no_toc }

```markdown
{: .important }
> {: .opaque }
> <div markdown="block">
> {: .warning }
> A paragraph
> </div>
```

{: .important }
> {: .opaque }
> <div markdown="block">
> {: .warning }
> A paragraph
> </div>
