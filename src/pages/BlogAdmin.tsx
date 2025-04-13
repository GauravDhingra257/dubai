import React, { useState, useRef } from "react";

const BlogAdmin = () => {
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };
  const initialBlogState = {
    id: Date.now(), // Generate a temporary ID
    title: "",
    date: new Date()
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
      .replace(/\//g, "."),
    featuredImage: "",
    imageAlt: "",
    introduction: ["", ""],
    tableOfContents: [],
    sections: [
      {
        title: "",
        content: [""],
        subsections: [],
      },
    ],
    ctaText: "INQUIRE TODAY",
    ctaUrl: "/contact",
    contactText: "Connect with our team to start your business!",
  };

  const [blog, setBlog] = useState(initialBlogState);
  const [previewMode, setPreviewMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  // Handle basic field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  // Handle introduction paragraphs
  const handleIntroChange = (index, value) => {
    const newIntro = [...blog.introduction];
    newIntro[index] = value;
    setBlog({ ...blog, introduction: newIntro });
  };

  // Add introduction paragraph
  const addIntroParagraph = () => {
    setBlog({ ...blog, introduction: [...blog.introduction, ""] });
  };

  // Remove introduction paragraph
  const removeIntroParagraph = (index) => {
    const newIntro = [...blog.introduction];
    newIntro.splice(index, 1);
    setBlog({ ...blog, introduction: newIntro });
  };

  // Handle table of contents changes
  const handleTocChange = (index, value) => {
    const newToc = [...blog.tableOfContents];
    newToc[index] = value;
    setBlog({ ...blog, tableOfContents: newToc });
  };

  // Add table of contents item
  const addTocItem = () => {
    setBlog({ ...blog, tableOfContents: [...blog.tableOfContents, ""] });
  };

  // Remove table of contents item
  const removeTocItem = (index) => {
    const newToc = [...blog.tableOfContents];
    newToc.splice(index, 1);
    setBlog({ ...blog, tableOfContents: newToc });
  };

  // Handle section changes
  const handleSectionChange = (sectionIndex, field, value) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex][field] = value;
    setBlog({ ...blog, sections: newSections });
  };

  // Handle section content changes
  const handleSectionContentChange = (sectionIndex, contentIndex, value) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].content[contentIndex] = value;
    setBlog({ ...blog, sections: newSections });
  };

  // Add section content paragraph
  const addSectionContent = (sectionIndex) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].content.push("");
    setBlog({ ...blog, sections: newSections });
  };

  // Remove section content paragraph
  const removeSectionContent = (sectionIndex, contentIndex) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].content.splice(contentIndex, 1);
    setBlog({ ...blog, sections: newSections });
  };

  // Add new section
  const addSection = () => {
    const newSections = [
      ...blog.sections,
      {
        title: "",
        content: [""],
        subsections: [],
        type: "regular",
      },
    ];
    setBlog({ ...blog, sections: newSections });
  };

  // Remove section
  const removeSection = (sectionIndex) => {
    const newSections = [...blog.sections];
    newSections.splice(sectionIndex, 1);
    setBlog({ ...blog, sections: newSections });
  };

  // Toggle section type
  const toggleSectionType = (sectionIndex) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].type =
      newSections[sectionIndex].type === "cta" ? "regular" : "cta";
    setBlog({ ...blog, sections: newSections });
  };

  // Handle subsection changes
  const handleSubsectionChange = (
    sectionIndex,
    subsectionIndex,
    field,
    value
  ) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].subsections[subsectionIndex][field] = value;
    setBlog({ ...blog, sections: newSections });
  };

  // Handle subsection content changes
  const handleSubsectionContentChange = (
    sectionIndex,
    subsectionIndex,
    contentIndex,
    value
  ) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].subsections[subsectionIndex].content[
      contentIndex
    ] = value;
    setBlog({ ...blog, sections: newSections });
  };

  // Add subsection
  const addSubsection = (sectionIndex) => {
    const newSections = [...blog.sections];
    if (!newSections[sectionIndex].subsections) {
      newSections[sectionIndex].subsections = [];
    }
    newSections[sectionIndex].subsections.push({
      title: "",
      content: [""],
    });
    setBlog({ ...blog, sections: newSections });
  };

  // Remove subsection
  const removeSubsection = (sectionIndex, subsectionIndex) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].subsections.splice(subsectionIndex, 1);
    setBlog({ ...blog, sections: newSections });
  };

  // Add subsection content paragraph
  const addSubsectionContent = (sectionIndex, subsectionIndex) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].subsections[subsectionIndex].content.push("");
    setBlog({ ...blog, sections: newSections });
  };

  // Remove subsection content paragraph
  const removeSubsectionContent = (
    sectionIndex,
    subsectionIndex,
    contentIndex
  ) => {
    const newSections = [...blog.sections];
    newSections[sectionIndex].subsections[subsectionIndex].content.splice(
      contentIndex,
      1
    );
    setBlog({ ...blog, sections: newSections });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real application, you would upload this file to your server or cloud storage
      // For now, we'll just create a local URL for preview
      const imageUrl = URL.createObjectURL(file);
      setBlog({ ...blog, featuredImage: imageUrl });
    }
  };

  // Submit the blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Here you would typically send the blog data to your API
      console.log("Submitting blog:", blog);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      // Reset form if needed
      // setBlog(initialBlogState);
    } catch (error) {
      console.error("Error submitting blog:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-md overflow-hidden p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Admin Panel</h1>

      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {previewMode ? "Edit Mode" : "Preview Mode"}
        </button>

        {!previewMode && (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className={`px-4 py-2 rounded ${
              submitting ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            } text-white`}
          >
            {submitting ? "Submitting..." : "Save Blog"}
          </button>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
            Blog saved successfully!
          </div>
        )}
      </div>

      {previewMode ? (
        <div className="border p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-2">
            {blog.title || "Blog Title"}
          </h2>
          <p className="text-sm text-gray-500 mb-4">{blog.date}</p>

          {blog.featuredImage && (
            <img
              src={blog.featuredImage}
              alt={blog.imageAlt || "Blog image"}
              className="w-full h-auto object-cover rounded-lg mb-6"
            />
          )}

          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1">
              <h3 className="uppercase text-sm font-bold text-gray-500 mb-4">
                CONTENTS
              </h3>
              <ul className="space-y-2 text-sm">
                {blog.tableOfContents.map((item, index) => (
                  <li key={index} className="text-black whitespace-pre-wrap">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-3">
              {blog.introduction.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">
                  {paragraph || "Introduction paragraph"}
                </p>
              ))}

              {blog.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  {section.type === "cta" ? (
                    <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md">
                      <h2 className="text-xl font-semibold mb-2">
                        {section.title || "CTA Title"}
                      </h2>
                      <p className="text-gray-300 text-sm mb-4">
                        {section.content[0] || "CTA content"}
                      </p>
                      <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors w-36 text-center">
                        {blog.ctaText}
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-4 mt-8">
                        {section.title || "Section Title"}
                      </h2>

                      {section.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-gray-700 mb-6">
                          {paragraph || "Section content"}
                        </p>
                      ))}

                      {section.subsections &&
                        section.subsections.map(
                          (subsection, subsectionIndex) => (
                            <div key={subsectionIndex} className="ml-4 mb-6">
                              <h3 className="text-lg font-bold text-gray-800 mb-3 mt-6">
                                {subsection.title || "Subsection Title"}
                              </h3>

                              {subsection.content.map(
                                (paragraph, paragraphIndex) => (
                                  <p
                                    key={paragraphIndex}
                                    className="text-gray-700 mb-6"
                                  >
                                    {paragraph || "Subsection content"}
                                  </p>
                                )
                              )}
                            </div>
                          )
                        )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                value={blog.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter blog title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="text"
                name="date"
                value={blog.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="DD.MM.YY"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Featured Image
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="w-full p-2 border rounded"
                  accept="image/*"
                />
                {blog.featuredImage && (
                  <div className="mt-2">
                    <img
                      src={blog.featuredImage}
                      alt="Preview"
                      className="h-24 object-cover rounded"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Image Alt Text
                </label>
                <input
                  type="text"
                  name="imageAlt"
                  value={blog.imageAlt}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Image description for accessibility"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Contact Text
              </label>
              <input
                type="text"
                name="contactText"
                value={blog.contactText}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Call to action text"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                CTA Button Text
              </label>
              <input
                type="text"
                name="ctaText"
                value={blog.ctaText}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Call to action button text"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">CTA URL</label>
              <input
                type="text"
                name="ctaUrl"
                value={blog.ctaUrl}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Call to action URL"
              />
            </div>
          </div>

          {/* Introduction Section */}
          <div className="p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>

            {blog.introduction.map((paragraph, index) => (
              <div key={index} className="mb-4 flex items-start">
                <textarea
                  value={paragraph}
                  onChange={(e) => handleIntroChange(index, e.target.value)}
                  className="w-full p-2 border rounded mr-2"
                  rows={3}
                  placeholder={`Introduction paragraph ${index + 1}`}
                />

                <button
                  type="button"
                  onClick={() => removeIntroParagraph(index)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  disabled={blog.introduction.length <= 1}
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addIntroParagraph}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Add Paragraph
            </button>
          </div>

          {/* Table of Contents */}
          <div className="p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>

            {blog.tableOfContents.map((item, index) => (
              <div key={index} className="mb-4 flex items-center">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleTocChange(index, e.target.value)}
                  className="w-full p-2 border rounded mr-2"
                  placeholder={`Table of Contents item ${index + 1}`}
                />

                <button
                  type="button"
                  onClick={() => removeTocItem(index)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addTocItem}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Add ToC Item
            </button>
          </div>

          {/* Sections */}
          {blog.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Section {sectionIndex + 1}
                </h2>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => toggleSectionType(sectionIndex)}
                    className={`px-3 py-1 rounded ${
                      section.type === "cta"
                        ? "bg-purple-500 hover:bg-purple-600"
                        : "bg-gray-500 hover:bg-gray-600"
                    } text-white`}
                  >
                    {section.type === "cta" ? "CTA Section" : "Regular Section"}
                  </button>

                  <button
                    type="button"
                    onClick={() => removeSection(sectionIndex)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    disabled={blog.sections.length <= 1}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Section Title
                </label>
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) =>
                    handleSectionChange(sectionIndex, "title", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Section title"
                />
              </div>

              <h3 className="text-lg font-medium mb-2">Content</h3>

              {section.content.map((paragraph, contentIndex) => (
                <div key={contentIndex} className="mb-4 flex items-start">
                  <textarea
                    value={paragraph}
                    onChange={(e) =>
                      handleSectionContentChange(
                        sectionIndex,
                        contentIndex,
                        e.target.value
                      )
                    }
                    className="w-full p-2 border rounded mr-2"
                    rows={3}
                    placeholder={`Section content paragraph ${
                      contentIndex + 1
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeSectionContent(sectionIndex, contentIndex)
                    }
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    disabled={section.content.length <= 1}
                  >
                    ✕
                  </button>
                </div>
              ))}

              {section.type !== "cta" && (
                <button
                  type="button"
                  onClick={() => addSectionContent(sectionIndex)}
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Add Paragraph
                </button>
              )}

              {/* Subsections (only for regular sections) */}
              {section.type !== "cta" && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Subsections</h3>

                    <button
                      type="button"
                      onClick={() => addSubsection(sectionIndex)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Add Subsection
                    </button>
                  </div>

                  {section.subsections &&
                    section.subsections.map((subsection, subsectionIndex) => (
                      <div
                        key={subsectionIndex}
                        className="ml-4 mb-6 p-3 border border-gray-200 rounded-md"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">
                            Subsection {subsectionIndex + 1}
                          </h4>

                          <button
                            type="button"
                            onClick={() =>
                              removeSubsection(sectionIndex, subsectionIndex)
                            }
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 text-sm"
                          >
                            ✕
                          </button>
                        </div>

                        <div className="mb-3">
                          <label className="block text-sm font-medium mb-1">
                            Subsection Title
                          </label>
                          <input
                            type="text"
                            value={subsection.title}
                            onChange={(e) =>
                              handleSubsectionChange(
                                sectionIndex,
                                subsectionIndex,
                                "title",
                                e.target.value
                              )
                            }
                            className="w-full p-2 border rounded"
                            placeholder="Subsection title"
                          />
                        </div>

                        <h5 className="text-sm font-medium mb-2">Content</h5>

                        {subsection.content.map((paragraph, contentIndex) => (
                          <div
                            key={contentIndex}
                            className="mb-3 flex items-start"
                          >
                            <textarea
                              value={paragraph}
                              onChange={(e) =>
                                handleSubsectionContentChange(
                                  sectionIndex,
                                  subsectionIndex,
                                  contentIndex,
                                  e.target.value
                                )
                              }
                              className="w-full p-2 border rounded mr-2"
                              rows={3}
                              placeholder={`Subsection content paragraph ${
                                contentIndex + 1
                              }`}
                            />

                            <button
                              type="button"
                              onClick={() =>
                                removeSubsectionContent(
                                  sectionIndex,
                                  subsectionIndex,
                                  contentIndex
                                )
                              }
                              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                              disabled={subsection.content.length <= 1}
                            >
                              ✕
                            </button>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() =>
                            addSubsectionContent(sectionIndex, subsectionIndex)
                          }
                          className="mt-1 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"
                        >
                          Add Paragraph
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addSection}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add New Section
          </button>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              disabled={submitting}
              className={`px-6 py-2 rounded ${
                submitting ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
              } text-white`}
            >
              {submitting ? "Submitting..." : "Save Blog Post"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BlogAdmin;
