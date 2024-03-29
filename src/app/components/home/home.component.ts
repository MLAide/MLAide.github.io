import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public keyFeatures = [
    {
      title: "Experiment Tracking",
      content: "Track parameters, metrics, and artifacts in your machine learning experiments that are organized by single runs.",
      imgUrl: "../../../assets/Home/experiment-tracking.png",
      altMessage: "ML Aide web user interface - run details view"
    },
    {
      title: "Artifact Management",
      content: "Attach artifacts like code, configs, or models to your experiment runs and reuse them in your next run.",
      imgUrl: "../../../assets/Home/artifact-management.png",
      altMessage: "ML Aide web user interface - artifacts list view"
    },
    {
      title: "Experiment Lineage",
      content: "Inspect your experiment with a visualized lineage representing the relationship between all runs and artifacts.",
      imgUrl: "../../../assets/Home/experiment-lineage.png",
      altMessage: "ML Aide web user interface - experiment details view"
    },
    {
      title: "Model Staging",
      content: "Put your models under version control and stage them to obtain transparency and reproducibility in your operations.",
      imgUrl: "../../../assets/Home/model-management.png",
      altMessage: "ML Aide web user interface - model management view" },
    {
      title: "Run Evaluation",
      content: "Evaluate your runs by viewing or comparing parameters and metrics to identify the best model for your machine learning product.",
      imgUrl: "../../../assets/Home/run-comparison.png",
      altMessage: "ML Aide web user interface - run comparison view"
    },
    {
      title: "Source-Code Version Control",
      content: "Track and visualize your source-code changes to analyze the effects on your experiments.",
      imgUrl: "../../../assets/Home/version-control.png",
      altMessage: "ML Aide web user interface - source-code version control view"
    },
    {
      title: "ML Library Integration",
      content: "An increasing number of integrated machine learning libraries for convenient in-code tracking of parameters, metrics, and models.",
      imgUrl: "../../../assets/Home/library-integration.png",
      altMessage: "Jupyter notebook example with ML Aide's python client integration" },
    {
      title: "Access Management",
      content: "Manage access to your machine learning projects and collaborate with other members of your team.",
      imgUrl: "../../../assets/Home/access-management.png",
      altMessage: "ML Aide web user interface - access management view"
    },
  ];

  public mlFrameworks = [
    {
      altText: "Tensorflow",
      imgUrl: "../../../assets/Home/tensorflow.png",
    },
    /*
    {
      altText: "PyTorch",
      imgUrl: "../../../assets/Home/pytorch.png",
    },
    */
    {
      altText: "Scikit learn",
      imgUrl: "../../../assets/Home/scikit-learn.png",
    }
  ];

  public roadmap = [
    { content: "Visualization of metrics for an easier model evaluation", },
    { content: "Provide kubernetes based installation for a quick setup and start", },
    { content: "Assistant system for automatic model selection", },
    { content: "Integration of further ML libraries (PyTorch, Keras, …) to increase adoption", },
    { content: "Auto recording of parameters and metrics to enhance the convenience", },
    { content: "Auto recognition of artifact types", },
    { content: "Visualization of artifact lineage to inspect its creation", },
    { content: "Tool based review process for model staging", },
    { content: "Package your serving app based on your training to enable CI/CD for machine learning models", },
    { content: "Extended data tracking (environment, code, …) to improve reproducibility" },
    { content: "Implement a project dashboard to provide a quick insight with a handful KPIs", },
    { content: "SaaS solution with a free trial period", },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
