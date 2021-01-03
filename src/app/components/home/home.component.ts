import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public keyFeatures = [
    { title: "Experiment Tracking", content: "Track parameters, metrics and artifacts in your machine learning experiments that are organized through single runs.", imgUrl: "../../../assets/Home/ai-2.png" },
    { title: "Artifact Management", content: "Attach artifacts like code, configs or models to your experiment runs and reuse them in your next run.", imgUrl: "../../../assets/Home/ai-2.png" },
    { title: "Experiment Lineage", content: "Inspect your experiment with a visualized lineage representing the relationship between all runs and artifacts.", imgUrl: "../../../assets/Home/ai-2.png" },
    { title: "Model Management", content: "Put your models under version control and stage them to obtain transparency and reproducibility in your operations.", imgUrl: "../../../assets/Home/ai-2.png" },
    { title: "Runs Evaluation", content: "Evaluate your runs by viewing or comparing parameters and metrics to identify the best model for your machine learning product.", imgUrl: "../../../assets/Home/ai-2.png" },
    { title: "ML Library Integration", content: "Raising amount of integrated machine learning libraries for convenient tracking of parameters, metrics and models.", imgUrl: "../../../assets/Home/ai-2.png" },
    { title: "Access Management", content: "Manage access to your machine learning projects and collaborate with other members of your team.", imgUrl: "../../../assets/Home/ai-2.png" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
